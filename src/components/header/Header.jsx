import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Nav from "../nav/Nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button className="menu-button" type="button" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>
          ☰
        </button>
        <Nav open={open} onNavigate={close} />
        <Link className="button button-small header-cta" to="/pedidos">Hacer pedido</Link>
      </div>
    </header>
  );
}
