import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <ul>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "Active" : "")}
          to={"/"}
        >
          Principal
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "Active" : "")}
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "Active" : "")}
          to={"/users"}
        >
          Usuarios
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "Active" : "")}
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
      </li>
    </ul>
  );
}
