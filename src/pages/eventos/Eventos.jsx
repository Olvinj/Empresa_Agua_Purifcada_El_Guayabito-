function Eventos() {
  return (
    <section className="pagina">
      <div className="contenedor">
        <h1>Promociones</h1>

        <div className="grid-cards">
          <article className="card promocion">
            <div className="card-body">
              <h2>Promoción para hogares</h2>

              <p>
                Consulta nuestras promociones disponibles
                para pedidos de varios botellones.
              </p>
            </div>
          </article>

          <article className="card promocion">
            <div className="card-body">
              <h2>Promoción para empresas</h2>

              <p>
                Contamos con opciones para negocios,
                oficinas y comercios.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Eventos;