import ImgPerfil from "../../public/pp.jpg";
import SocialMedia from "../components/SocialMedia";

function AsideDerecho() {
  return (
    <div>
        <div className="bg-white rounded-lg shadow-sm p-5 h-max mb-5 text-center ">
            <h2 className="uppercase font-bold text-2xl mb-3">Perfil</h2>
            <img src={ImgPerfil} alt="Marvin Méndez, Perfil" 
                className="w-20 rounded-full inline-block mx-auto"
            />
            <h3 className="font-bold mt-3 uppercase">Marvin Méndez</h3>
            <p className="m-0 text-gray-500">Desarrollador web</p>
            <p className="font-bold">Ingeniería en Desarrollo de Software</p>
            <p>Licenciatura en Ciencias de la Educación con especialidad en Matemática</p>

            <a href="#" className="bg-whatsapp p-2 rounded-lg mt-2 text-white flex gap-1 w-max mx-auto font-bold">
                <i className="bi bi-whatsapp"></i>
                ¡Contrátame!
            </a>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5 h-max mb-5">
            <h2 className="text-center uppercase font-bold text-2xl mb-3">Redes Sociales</h2>
            <SocialMedia />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5 h-max">
            <h2 className="text-center uppercase font-bold text-2xl mb-3">Pasatiempos</h2>
            <ul className="mt-5">
                <li>🎧 Escuchar música</li>
                <li>📖 Leer</li>
                <li>♟ Jugar ajedrez</li>
            </ul>
        </div>
    </div>
  )
}

export default AsideDerecho