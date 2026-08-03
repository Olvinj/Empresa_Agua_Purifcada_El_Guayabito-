import Handlebars from "handlebars";
import plantillaMensaje from "../../templates/mensaje.handlebars?raw";

function Integracion() {
  const plantilla = Handlebars.compile(plantillaMensaje);

  const contenido = plantilla({
    titulo: "Compromiso con nuestros clientes",
    descripcion:
      "Trabajamos para ofrecer agua purificada de calidad y una atención responsable.",
  });

  return (
    <section className="pagina">
      <div className="contenedor">
        <h1>Integración</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: contenido,
          }}
        />
      </div>
    </section>
  );
}

export default Integracion;