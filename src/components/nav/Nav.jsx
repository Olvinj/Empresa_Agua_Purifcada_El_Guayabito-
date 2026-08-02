import NavLinks from "./NavLinks";

export default function Nav({ open, onNavigate }) {
  return (
    <nav className={`main-nav${open ? " open" : ""}`} aria-label="Navegación principal">
      <NavLinks onNavigate={onNavigate} />
    </nav>
  );
}
