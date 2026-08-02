import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor footer-contenido">
        <div>
          <h2>Agua Purificada El Guayabito</h2>

          <p>
            Agua purificada para hogares, negocios y empresas.
          </p>
        </div>

        <div>
          <h2>Enlaces</h2>

          <FooterLink ruta="/" texto="Inicio" />
          <FooterLink ruta="/nosotros" texto="Nosotros" />
          <FooterLink ruta="/programas" texto="Productos" />
          <FooterLink ruta="/contacto" texto="Contacto" />
        </div>

        <div>
          <h2>Ubicación</h2>

          <p>
            El Guayabito, Santa María del Real, Olancho.
          </p>
        </div>
      </div>

      <div className="footer-inferior">
        <p>
          © 2026 Agua Purificada El Guayabito
        </p>
      </div>
    </footer>
  );
}

export default Footer;