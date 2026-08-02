import NavItem from "../header/NavItem";

function NavLinks() {
  return (
    <ul className="nav-lista">
      <NavItem ruta="/" texto="Inicio" />
      <NavItem ruta="/nosotros" texto="Nosotros" />
      <NavItem ruta="/programas" texto="Productos" />
      <NavItem ruta="/eventos" texto="Promociones" />
      <NavItem ruta="/galeria" texto="Galería" />
      <NavItem ruta="/blog" texto="Blog" />
      <NavItem ruta="/contacto" texto="Contacto" />
    </ul>
  );
}

export default NavLinks;