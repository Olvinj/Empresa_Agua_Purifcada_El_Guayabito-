const imagenes = [
  {
    id: 1,
    imagen: `${import.meta.env.BASE_URL}images/galeria1.jpeg`,
    alt: "Área de producción de Agua Purificada El Guayabito",
  },
  {
    id: 2,
    imagen: `${import.meta.env.BASE_URL}images/galeria2.jpeg`,
    alt: "Botellones de agua purificada",
  },
  {
    id: 3,
    imagen: `${import.meta.env.BASE_URL}images/galeria3.jpeg`,
    alt: "Vehículo de distribución de agua",
  },
  {
    id: 4,
    imagen: `${import.meta.env.BASE_URL}images/galeria4.jpeg`,
    alt: "Productos de Agua Purificada El Guayabito",
  },
];

function Galeria() {
  return (
    <section className="pagina">
      <div className="contenedor">
        <h1>Galería</h1>

        <p className="introduccion">
          Conoce nuestros productos, instalaciones y actividades.
        </p>

        <div className="galeria">
          {imagenes.map((item) => (
            <img
              key={item.id}
              src={item.imagen}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galeria;