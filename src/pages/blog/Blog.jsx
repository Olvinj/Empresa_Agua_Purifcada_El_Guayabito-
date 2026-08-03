function Blog() {
  return (
    <section className="pagina">
      <div className="contenedor">
        <h1>Blog</h1>

        <div className="grid-cards">
          <article className="card">
            <div className="card-body">
              <h2>Importancia de consumir agua</h2>

              <p>
                Mantenerse hidratado es importante para
                realizar nuestras actividades diarias.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="card-body">
              <h2>Cuidado de los botellones</h2>

              <p>
                Los botellones deben mantenerse limpios,
                protegidos y alejados de la luz directa.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Blog;