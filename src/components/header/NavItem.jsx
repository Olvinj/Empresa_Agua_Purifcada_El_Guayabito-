import { NavLink } from "react-router-dom";

function NavItem({ ruta, texto }) {
  return (
    <li>
      <NavLink
        to={ruta}
        className={({ isActive }) =>
          isActive ? "nav-enlace activo" : "nav-enlace"
        }
      >
        {texto}
      </NavLink>
    </li>
  );
}

export default NavItem;