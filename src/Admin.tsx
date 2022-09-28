import React, { useState } from "react";
import toast from "react-hot-toast";
import { foodTags, NewFood } from "./food";
import Button from "./resusable/Button";
import CheckBox from "./resusable/CheckBox";
import CheckBoxList from "./resusable/CheckBoxList";
import Heading from "./resusable/Heading";
import Input from "./resusable/Input";
import { addFood } from "./services/foodsApi";

// Excercise 3 - Add a new Heading component.

//Exercise 4 Support className on Input

// Exercise 5 - create checkbox and checkbox list components

const emptyFood: NewFood = {
  name: "",
  image: "",
  price: 0,
  description: "",
  tags: [],
};

export type Errors = {
  name?: string;
  image?: string;
  price?: string;
  description?: string;
  tags?:string;
}

export type Touched = {
  name?: boolean;
  image?: boolean;
  price?: boolean;
  description?: boolean;
  tags?: boolean;
};

type FormStatus = "idle" | "submitting" | "submitted" | "error";

export default function Admin() {
  const [food, setFood] = useState(emptyFood);
  const [touched, setTouched] = useState<Touched>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  
  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    // React injects the current state value when a function is passsed to setState
    setFood((currentFood) => ({ ...currentFood, [id]: value }));
  };

  function handleBlur (event: React.FocusEvent<HTMLInputElement>) {
    const {id} = event.target;
    setTouched((currentTouched) => ({...currentTouched, [id]:true}))
  }

  function validate() {
    const newErrors: Errors = {};
    if (!food.name) {
      newErrors.name = "Name is required";
    }
    if (!food.image) {
      newErrors.image = "Image is required";
    }
    if (!food.price) {
      newErrors.price = "Price is required";
    }
    if (!food.description) {
      newErrors.description = "Description is required";
    }
    if (food.tags.length === 0) {
      newErrors.tags = "At least one tag is required";
    }
    return newErrors;
  }

  function getError(field:keyof Errors){
    return status === "submitted" || touched[field] ? errors[field] : "";
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.scrollTo(0,0);
    
    // If someone already has clicked the submit, don't run this again.
    // Yes, we could delete the button, but this is nicer for accessibility
    if (status === "submitting") return;
    setStatus("submitting");
    if(!isValid) {
      setStatus("submitted")
      return;
    }
    await addFood(food); 
    toast.success("Food added! 🍔");
    setStatus("idle");
    setFood(emptyFood);
    setTouched({});
  };

  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form onSubmit={handleSubmit} className="p-4 w-1/2">
        <Input
          id="name"
          label="Name"
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={food.name}
          // Excercise 7 - centralize this logic in a function above
          error={getError("name")}
        />
        <Input
          id="description"
          label="Description"
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={food.description}
          error={getError("description")}
        />
        <Input
          id="price"
          label="Price"
          type="number"
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={food.price.toString()}
          error={getError("price")}
        />
        <Input
          id="image"
          label="Image Filename"
          type="text"
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={food.image}
          error={getError("image")}
        />
        <CheckBoxList label="Select Food Tags" error={getError("tags")}>
          {foodTags.map((tag) => (
            <CheckBox
              className="flex gap-1"
              key={tag}
              id={tag}
              label={tag}
              checked={food.tags.includes(tag)}
              onChange={(event) => {
                // Exercise 6 - Implement this change handler
                setFood((currentFood) => {
                  const { checked } = event.target;
                  const tags = checked
                    ? [...currentFood.tags, tag]
                    : currentFood.tags.filter((t) => t !== tag);
                  return { ...currentFood, tags };
                });
              }}
            />
          ))}
        </CheckBoxList>
        <Button className="block" type="submit">
          {status === "submitting" ? "Saving..." : "Save" }
        </Button>
      </form>
    </>
  );
}
