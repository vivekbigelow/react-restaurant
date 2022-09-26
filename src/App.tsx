import { Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Menu from "./Menu";

// Excercise: Display food nmae in H2 tag. Display description, nad price in separate paragraph tags.
// Style H2

// Exercise 2: create a navbar with a home link (/) and an admin link (/admin)
export default function App() {
  return (
    <main>
      <h1 className="p-4 text-3xl font-bold">React Restaurant</h1>
      <nav className="p-4 list-none bg-black">
        <ul className="flex gap-3 list-none text-white">
          <li>
            <Link className="hover:font-bold" to="/">
              Home
            </Link>
          </li>
          <li>
            <a className="hover:font-bold" href="/admin">
              Admin
            </a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </main>
  );
}
