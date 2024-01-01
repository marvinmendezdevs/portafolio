import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Aside(){
    const url = useLocation();
    const [ menu, setMenu ] = useState(false);

    return (
        <div className="lg:w-48 bg-primary lg:min-h-screen py-3 px-5 sticky top-0">
            <div className="flex justify-between items-center lg:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-white inline lg:hidden" onClick={ () => setMenu(!menu) }>
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
                <a className="text-4xl block text-center hover:text-white cursor-pointer text-gray-400 font-bold">
                    MM
                </a>
            </div>
            <nav className={`text-gray-400 my-10 lg:flex flex-col gap-5  ${ menu ? 'block' : 'hidden'}`}>
                <Link to="/" className={`${url.pathname === '/' ? 'bg-secondary': ''} flex flex-col gap-2 items-center hover:bg-secondary p-3 rounded-md`}>
                    <i className="fa-solid fa-address-card"></i>
                    Acerca de mí
                </Link>
                <Link to="/proyectos" className={`${url.pathname === '/proyectos' ? 'bg-secondary': ''} flex flex-col gap-2 items-center hover:bg-secondary p-3 rounded-md`}>
                    <i className="fa-solid fa-briefcase"></i>
                    Proyectos
                </Link>
            </nav>
        </div>
    );
}

export default Aside;