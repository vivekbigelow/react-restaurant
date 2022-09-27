import { foodTags } from "./food";
import Button from "./resusable/Button";
import CheckBox from "./resusable/CheckBox";
import CheckBoxList from "./resusable/CheckBoxList";
import Heading from "./resusable/Heading";
import Input from "./resusable/Input";

// Excercise 3 - Add a new Heading component.

//Exercise 4 Support className on Input

// Exercise 5 - create checkbox and checkbox list components
export default function Admin() {
  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form className="p-4">
        <Input id="name" label="Name" />
        <Input id="description" label="Description" />
        <Input id="price" label="Price" type="number" />
        <CheckBoxList>
            {foodTags.map((tag) => (
                <CheckBox key={tag} id={tag} label={tag} />
            ))}
        </CheckBoxList>
        <Button className="block" type="submit">
          Save
        </Button>
      </form>
    </>
  );
}
