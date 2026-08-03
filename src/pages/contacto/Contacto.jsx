import { useState } from "react";

function Contacto() {
  const [mensaje, setMensaje] = useState("");

  const enviarFormulario = (evento) => {
    evento.preventDefault();

    const formulario = evento.target;
    const datos = new FormData(formulario);

    const nombre = datos.get("nombre");
    const correo = datos.get("correo");
    const contenido = datos.get("mensaje");

    if (!nombre || !correo || !contenido) {
      setMensaje("Debes completar todos los campos.");
      return;
    }

    setMensaje("Tu mensaje fue enviado correctamente.");
    formulario.reset();
  };

  return (
    <section className="pagina">
      <div className="contenedor">
        <h1>Contacto</h1>

        <div className="contacto-contenido">
          <div>
            <h2>Información</h2>

            <p>
              El Guayabito, Santa María del Real, Olancho.
            </p>

            <p>
              Teléfono: +504 9999-9999
            </p>

            <p>
              Correo: contacto@elguayabirito.com
            </p>
          </div>

          <form
            className="formulario"
            onSubmit={enviarFormulario}
          >
            <label htmlFor="nombre">Nombre</label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Escribe tu nombre"
            />

            <label htmlFor="correo">Correo electrónico</label>

            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="correo@ejemplo.com"
            />

            <label htmlFor="mensaje">Mensaje</label>

            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              placeholder="Escribe tu mensaje"
            />

            <button type="submit" className="boton">
              Enviar mensaje
            </button>

            {mensaje && (
              <p className="formulario-mensaje">
                {mensaje}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;