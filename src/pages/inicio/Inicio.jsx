import {
  Card,
  CardHeaderImg,
  CardHeader,
  CardBody,
  CardFooter,
} from "../../components/cards";

const productos = [
  {
    id: 1,
    nombre: "Botellón de agua",
    descripcion:
      "Botellón de agua purificada ideal para hogares y oficinas.",
    precio: "L 40.00",
    imagen: "/images/botellon.jpg",
  },
  {
    id: 2,
    nombre: "Botella de agua",
    descripcion:
      "Botella de agua purificada para actividades y uso personal.",
    precio: "L 15.00",
    imagen: "/images/botella.jpg",
  },
  {
    id: 3,
    nombre: "Bolsa de agua",
    descripcion:
      "Presentación práctica y económica para mantenerse hidratado.",
    precio: "L 5.00",
    imagen: "/images/bolsa.jpg",
  },
];

function Programas() {
  return (
    <section className="pagina">
      <div className="contenedor">
        <h1>Nuestros productos</h1>

        <p className="introduccion">
          Conoce las diferentes presentaciones de agua
          purificada que ofrecemos.
        </p>

        <div className="grid-cards">
          {productos.map((producto) => (
            <Card key={producto.id}>
              <CardHeaderImg
                imagen={producto.imagen}
                alt={producto.nombre}
              />

              <CardHeader titulo={producto.nombre} />

              <CardBody
                descripcion={producto.descripcion}
              />

              <CardFooter precio={producto.precio} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programas;