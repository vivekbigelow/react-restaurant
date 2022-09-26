import Heading from "./resusable/Heading";
import Input from "./resusable/Input";

// Excercise 3 - Add a new Heading component.

export default function Admin() {
  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form>
        <Input id="name" label="Name" />
      </form>
    </>
  );
}
