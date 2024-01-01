export default function Footer() {
    const fecha = new Date();
  return ( 
    <div>
        <p className="mt-5 text-gray-600 text-end">
            Todos los derechos reservados <span className="hidden md:inline">|</span> {' '}
            <span className="block font-bold md:inline">Todo de Código &copy; { fecha.getFullYear() } </span>
        </p>
    </div>
  )
}
