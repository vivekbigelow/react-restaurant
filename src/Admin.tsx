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

export default function Admin() {
  const [food, setFood] = useState(emptyFood);
  const [errors, setErrors] = useState<Errors>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    // React injects the current state value when a function is passsed to setState
    setFood((currentFood) => ({ ...currentFood, [id]: value }));
  };

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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const isValid = validate();
    if(!isValid) return;
    await addFood(food); 
    toast.success("Food added! 🍔");
    setFood(emptyFood);
  };

  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form  onSubmit={handleSubmit} className="p-4 w-1/2">
        <Input
          id="name"
          label="Name"
          onChange={handleInputChange}
          value={food.name}
          error={errors.name}
        />
        <Input
          id="description"
          label="Description"
          onChange={handleInputChange}
          value={food.description}
          error={errors.description}
        />
        <Input
          id="price"
          label="Price"
          type="number"
          onChange={handleInputChange}
          value={food.price.toString()}
          error={errors.price}
        />
        <Input
          id="image"
          label="Image Filename"
          type="text"
          onChange={handleInputChange}
          value={food.image}
          error={errors.image}
        />
        <CheckBoxList label="Select Food Tags" error={errors.tags}>
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
          Save
        </Button>
      </form>
    </>
  );
}
