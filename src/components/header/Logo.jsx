import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Ir al inicio">
      <span className="brand-drop" aria-hidden="true">💧</span>
      <span><strong>El Guayabirito</strong><small>Agua purificada</small></span>
    </Link>
  );
}
