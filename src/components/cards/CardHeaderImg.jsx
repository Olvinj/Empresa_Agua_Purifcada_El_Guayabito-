function CardHeaderImg({ imagen, alt }) {
  return (
    <img
      className="card-imagen"
      src={imagen}
      alt={alt}
    />
  );
}

export default CardHeaderImg;