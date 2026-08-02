import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Inicio from "./pages/inicio/Inicio";
import Blog from "./pages/blog/Blog";
import Contacto from "./pages/contacto/Contacto";
import Donacion from "./pages/donacion/Donacion";
import Eventos from "./pages/eventos/Eventos";
import Faq from "./pages/faq/Faq";
import Galeria from "./pages/galeria/Galeria";
import Help from "./pages/help/Help";
import Integracion from "./pages/integracion/Integracion";
import Nosotros from "./pages/nosotros/Nosotros";
import Programas from "./pages/programas/Programas";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/donacion" element={<Donacion />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/help" element={<Help />} />
          <Route path="/integracion" element={<Integracion />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/programas" element={<Programas />} />

          <Route
            path="*"
            element={
              <section className="pagina">
                <div className="contenedor">
                  <h1>Página no encontrada</h1>
                  <p>La página que buscas no existe.</p>
                </div>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
