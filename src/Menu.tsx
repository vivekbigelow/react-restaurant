import { foods } from './food';
export default function Menu () {
    return (
      <div className="p-4 flex flex-wrap">
        {foods.map((food) => {
          return (
            <div className="p-4 hover:bg-black hover:cursor-pointer max-w-sm hover:text-white shadow-lg m-4 rounded-md border-solid border-2 border-gray">
              <h2 className="font-bold">{food.name}</h2>
              <img className="h-52" src={"/images/" + food.image} />
              <p>{food.description}</p>
              <p>${food.price}</p>
            </div>
          );
        })}
      </div>
    );
}