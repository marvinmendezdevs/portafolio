
function Servicios() {
  return (
    <>
        <div className="p-5 flex flex-col items-center gap-5">
            <i className="fa-solid text-primary fa-palette text-3xl"></i>
            <h2 className="text-primary text-center font-bold text-lg uppercase">Diseño de sitios web</h2>
        </div>
        <div className="p-5 flex flex-col items-center gap-5">
            <i className="fa-solid text-primary fa-code text-3xl"></i>
            <h2 className="text-primary text-center font-bold text-lg uppercase">Desarrollo web</h2>
        </div>
        <div className="p-5 flex flex-col items-center gap-5">
            <i className="fa-solid text-primary fa-database text-3xl"></i>
            <h2 className="text-primary text-center font-bold text-lg uppercase">Administración de base de datos</h2>
        </div>
    </>
  )
}

export default Servicios