import Logo from "./Logo";
import Nav from "../nav/Nav";

function Header() {
  return (
    <header className="header">
      <div className="contenedor header-contenido">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default Header;