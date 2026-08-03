const preguntas = [
  {
    id: 1,
    pregunta: "¿Dónde está ubicada la empresa?",
    respuesta:
      "Estamos ubicados en El Guayabito, Santa María del Real, Olancho.",
  },
  {
    id: 2,
    pregunta: "¿Qué productos ofrecen?",
    respuesta:
      "Ofrecemos agua purificada en diferentes presentaciones.",
  },
  {
    id: 3,
    pregunta: "¿Atienden empresas?",
    respuesta:
      "Sí, atendemos hogares, oficinas, negocios y empresas.",
  },
];

function Faq() {
  return (
    <section className="pagina">
      <div className="contenedor">
        <h1>Preguntas frecuentes</h1>

        <div className="preguntas">
          {preguntas.map((item) => (
            <details key={item.id}>
              <summary>{item.pregunta}</summary>
              <p>{item.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;