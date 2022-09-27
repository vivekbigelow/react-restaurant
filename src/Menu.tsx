import { useEffect, useState } from "react";
import { Food } from "./food";
import Heading from "./resusable/Heading";
import { getFoods } from "./services/foodsApi";

export default function Menu() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function fetchFoods() {
      setFoods(await getFoods());
    }
    fetchFoods();
  }, []);

  return (
    <>
      <Heading level={2}>Menu</Heading>
      <div className="p-4 flex flex-wrap">
        {foods.map((food) => {
          return (
            <div
              key={food.name}
              className="p-4 hover:bg-black hover:cursor-pointer max-w-sm hover:text-white shadow-lg m-4 rounded-md border-solid border-2 border-gray"
            >
              <Heading level={3}>{food.name}</Heading>
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
