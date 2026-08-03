import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="contenedor hero-contenido">
          <div className="hero-texto">
            <span className="etiqueta">
              Agua pura y de calidad
            </span>

            <h1>
              Agua Purificada El Guayabito
            </h1>

            <p>
              Ofrecemos agua purificada para hogares,
              negocios y empresas de nuestra comunidad.
            </p>

            <Link to="/programas" className="boton">
              Ver productos
            </Link>
          </div>

          <div className="hero-imagen">
            <img
              src="/images/agua-principal.jpg"
              alt="Botellones de Agua Purificada El Guayabirito"
            />
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo-seccion">
            ¿Por qué elegirnos?
          </h2>

          <div className="beneficios">
            <article className="beneficio">
              <span>💧</span>
              <h3>Agua purificada</h3>
              <p>
                Nuestro producto pasa por un proceso de
                purificación para garantizar su calidad.
              </p>
            </article>

            <article className="beneficio">
              <span>✅</span>
              <h3>Calidad y confianza</h3>
              <p>
                Trabajamos para ofrecer un producto seguro
                y confiable a nuestros clientes.
              </p>
            </article>

            <article className="beneficio">
              <span>🚚</span>
              <h3>Atención eficiente</h3>
              <p>
                Atendemos hogares, empresas y comercios de
                distintas comunidades.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;