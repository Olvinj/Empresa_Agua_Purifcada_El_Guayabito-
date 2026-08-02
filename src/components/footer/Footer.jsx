import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section><h2>El Guayabirito</h2><p>Agua purificada para hogares, negocios y eventos en Olancho.</p></section>
        <section><h2>Enlaces</h2><FooterLink to="/productos">Productos</FooterLink><FooterLink to="/pedidos">Pedidos</FooterLink><FooterLink to="/contacto">Contacto</FooterLink></section>
        <section><h2>Ubicación</h2><p>El Guayabito, Santa María del Real, Olancho, Honduras.</p><p>Lunes a sábado, 7:00 a. m. – 5:00 p. m.</p></section>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Agua Purificada El Guayabirito · Proyecto académico Grupo G</div>
    </footer>
  );
}
