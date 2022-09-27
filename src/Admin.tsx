import React, { useState } from "react";
import { Food, foodTags } from "./food";
import Button from "./resusable/Button";
import CheckBox from "./resusable/CheckBox";
import CheckBoxList from "./resusable/CheckBoxList";
import Heading from "./resusable/Heading";
import Input from "./resusable/Input";

// Excercise 3 - Add a new Heading component.

//Exercise 4 Support className on Input

// Exercise 5 - create checkbox and checkbox list components

const emptyFood: Food = {
  name: "",
  image: "",
  price: 0,
  description: "",
  tags: [],
};

export default function Admin() {
  const [food, setFood] = useState(emptyFood);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    // React injects the current state value when a function is passsed to setState
    setFood((currentFood) => ({ ...currentFood, [id]: value }));
  };

  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form className="p-4 w-1/2">
        <Input
          id="name"
          label="Name"
          onChange={handleInputChange}
          value={food.name}
        />
        <Input
          id="description"
          label="Description"
          onChange={handleInputChange}
          value={food.description}
        />
        <Input
          id="price"
          label="Price"
          type="number"
          onChange={handleInputChange}
          value={food.price.toString()}
        />
        <Input
          id="image"
          label="Image Filename"
          type="text"
          onChange={handleInputChange}
          value={food.image}
        />
        <CheckBoxList label="Select Food Tags">
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
