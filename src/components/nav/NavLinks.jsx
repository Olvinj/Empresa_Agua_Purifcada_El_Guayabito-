import { NavLink } from "react-router-dom";

const links = [
  ["/", "Inicio"],
  ["/nosotros", "Nosotros"],
  ["/productos", "Productos"],
  ["/promociones", "Promociones"],
  ["/galeria", "Galería"],
  ["/preguntas", "Preguntas"],
  ["/contacto", "Contacto"],
];

export default function NavLinks({ onNavigate }) {
  return links.map(([to, label]) => (
    <NavLink
      key={to}
      to={to}
      onClick={onNavigate}
      className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
      end={to === "/"}
    >
      {label}
    </NavLink>
  ));
}
