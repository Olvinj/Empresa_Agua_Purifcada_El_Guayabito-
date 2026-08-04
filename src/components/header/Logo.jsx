import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img
        src={`${import.meta.env.BASE_URL}images/logo.png`}
        alt="Logo Agua Purificada El Guayabito"
        className="logo-imagen"
      />

      <div className="logo-texto">
        <strong>Agua Purificada</strong>
        <small>El Guayabito</small>
      </div>
    </Link>
  );
}

export default Logo;