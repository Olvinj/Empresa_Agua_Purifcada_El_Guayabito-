const imagenes = [
  {
    id: 1,
    imagen: "/images/galeria1.jpg",
    alt: "Área de producción de agua purificada",
  },
  {
    id: 2,
    imagen: "/images/galeria2.jpg",
    alt: "Botellones de agua purificada",
  },
  {
    id: 3,
    imagen: "/images/galeria3.jpg",
    alt: "Vehículo de distribución de agua",
  },
  {
    id: 4,
    imagen: "/images/galeria4.jpg",
    alt: "Productos de Agua Purificada El Guayabirito",
  },
];

function Galeria() {
  return (
    <section className="pagina">
      <div className="contenedor">
        <h1>Galería</h1>

        <p className="introduccion">
          Conoce nuestros productos, instalaciones y
          actividades.
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