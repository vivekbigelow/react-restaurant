import { foods } from "./food";
import Heading from "./resusable/Heading";
export default function Menu() {
  return (
    <>
      <Heading level={2}>Menu</Heading>
      <div className="p-4 flex flex-wrap">
        {foods.map((food) => {
          return (
            <div className="p-4 hover:bg-black hover:cursor-pointer max-w-sm hover:text-white shadow-lg m-4 rounded-md border-solid border-2 border-gray">
              <Heading level={2}>{food.name}</Heading>
              <img className="h-52" src={"/images/" + food.image} />
              <p>{food.description}</p>
              <p>${food.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
