import {
  Card,
  CardHeaderImg,
  CardHeader,
  CardBody,
  CardFooter,
} from "../../components/cards";

const servicios = [
  {
    id: 1,
    titulo: "Agua 100% Purificada",
    descripcion:
      "Aplicamos procesos de purificación y control de calidad para ofrecer agua segura, limpia y de excelente sabor para toda la familia.",
    texto: "Calidad Garantizada",
    imagen: `${import.meta.env.BASE_URL}images/agua1.png`,
  },
  {
    id: 2,
    titulo: "Distribución a Domicilio",
    descripcion:
      "Llevamos nuestros productos hasta hogares, negocios y empresas con un servicio rápido, seguro y puntual.",
    texto: "Entrega Rápida",
    imagen: `${import.meta.env.BASE_URL}images/agua2.png`,
  },
  {
    id: 3,
    titulo: "Compromiso con Nuestros Clientes",
    descripcion:
      "Nuestro objetivo es brindar la mejor atención y mantener la confianza de nuestros clientes mediante un servicio responsable y de calidad.",
    texto: "Excelente Atención",
    imagen: `${import.meta.env.BASE_URL}images/agua3.png`,
  },
];

function Inicio() {
  return (
    <section className="pagina">
      <div className="contenedor">
        <h1>Bienvenidos a Agua Purificada El Guayabito</h1>

        <p className="introduccion">
          En Agua Purificada El Guayabito trabajamos para ofrecer agua de la
          más alta calidad, utilizando procesos de purificación confiables y
          un servicio de distribución eficiente. Nuestra misión es brindar un
          producto seguro que contribuya al bienestar de nuestros clientes.
        </p>

        <div className="grid-cards">
          {servicios.map((servicio) => (
            <Card key={servicio.id}>
              <CardHeaderImg
                imagen={servicio.imagen}
                alt={servicio.titulo}
              />

              <CardHeader titulo={servicio.titulo} />

              <CardBody descripcion={servicio.descripcion} />

              <CardFooter precio={servicio.texto} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Inicio;