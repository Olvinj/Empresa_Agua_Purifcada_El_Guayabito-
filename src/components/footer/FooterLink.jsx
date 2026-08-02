import { Link } from "react-router-dom";

function FooterLink({ ruta, texto }) {
  return (
    <Link to={ruta} className="footer-enlace">
      {texto}
    </Link>
  );
}

export default FooterLink;