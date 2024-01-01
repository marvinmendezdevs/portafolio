import Footer from "../components/Footer"
import Proyecto from "../components/Proyecto"
import { proyectosProfesionales, proyectosPersonales } from "../includes/data";

function Proyectos() {
  return (
    <div>
        <div className="bg-white rounded-lg shadow-sm p-5 gap-5 mb-5">
            <div>
                <h2 className="uppercase font-black text-3xl mb-3">Proyectos</h2>
                <p>
                    Bienvenidos a la sección de proyectos. En esta parte de mi sitio web podrás observar un poco de mi trabajo. Los sitios web que encontrarás aquí son los que considero importantes y necesario mostrar para reflejar mis habilidades técnicas así como mis buenas prácticas de desarrollo de Software, disfruta verlos...
                </p>
            </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm mb-3">
          <h2 className="uppercase font-black text-xl mb-3">Proyectos profesionales</h2>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
              proyectosProfesionales.map( proyecto => (
                <Proyecto
                  key={proyecto.id}
                  proyecto={ proyecto }
                />
              ))
            }
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h2 className="uppercase font-black text-xl mb-3">Proyectos de aprendizaje</h2>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
              proyectosPersonales.map( proyecto => (
                <Proyecto
                  key={proyecto.id}
                  proyecto={ proyecto }
                />
              ))
            }
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Proyectos