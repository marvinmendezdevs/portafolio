import ImgPerfil from "../../public/pp.jpg";
import Habilidades from "../components/Habilidades";
import Servicios from "../components/Servicios";

function Acercade() {
    const fecha = new Date();
    return (
        <>
            <div>
                <div className="bg-white rounded-lg shadow-sm p-5 flex items-center content-center gap-5 mb-5">
                    <img src={ImgPerfil} alt="Marvin Méndez, Perfil" 
                        className="w-20 rounded-full"
                    />
                    <div>
                        <h2 className="uppercase font-black text-3xl mb-3">Acerca de mí</h2>
                        <p>
                            Hola, soy <span className="font-bold text-primary">Marvin</span>. 👋🏻 Soy docente de Matemática por profesión. Un día, descubrí el fantástico mundo de la programación y desde entonces no he parado de escribir líneas y líneas de imaginación y arte...
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-5 pb-20">
                    <h2 className="uppercase font-black text-3xl mb-3 text-center">
                        Mis servicios
                    </h2>
                    <p className="text-center text-gray-700 mb-10">
                        Algunos servicios que ofrezco
                    </p>
                    <div className="md:grid grid-cols-3">
                        <Servicios />
                    </div>
                </div>

                <div className="md:grid grid-cols-3 gap-5 md:px-14">
                    <Habilidades />
                </div>
                <div>
                    <p className="mt-5 text-gray-600 text-end">
                        Todos los derechos reservados <span className="hidden md:inline">|</span> {' '}
                        <span className="block font-bold md:inline">Todo de Código &copy; { fecha.getFullYear() } </span>
                    </p>
                </div>
            </div>    
        </>
  )
}

export default Acercade;