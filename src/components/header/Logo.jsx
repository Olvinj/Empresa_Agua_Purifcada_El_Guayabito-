import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-icono">💧</span>

      <span>
        <strong>Agua Purificada</strong>
        <small>El Guayabirito</small>
      </span>
    </Link>
  );
}

export default Logo;