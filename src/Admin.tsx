import Button from "./resusable/Button";
import Heading from "./resusable/Heading";
import Input from "./resusable/Input";

// Excercise 3 - Add a new Heading component.

export default function Admin() {
  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form className="p-4">
        <Input id="name" label="Name" />
        <Input id="description" label="Description" />
        <Input id="price" label="Price" type="number" />
        <Button type="submit" variant="secondary">Save</Button>
      </form>
    </>
  );
}
