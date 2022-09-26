import { foods } from "./food";

// Excercise: Display food nmae in H2 tag. Display description, nad price in separate paragraph tags.
// Style H2
export default function App() {
  return (
    <>
      <h1 className="p-4 text-3xl font-bold">React Restaurant</h1>
      <div className="p-4 flex flex-wrap">

      {foods.map((food) => {
        return (
          <div className="p-4 hover:bg-black hover:cursor-pointer max-w-sm hover:text-white shadow-lg m-4 rounded-md border-solid border-2 border-gray">
            <h2 className="font-bold">{food.name}</h2>
            <img className="h-52" src={"/images/" + food.image}/>
            <p>{food.description}</p>
            <p>
              ${food.price}
            </p>
          </div>
        );
      })}
      </div>
    </>
  );
}
