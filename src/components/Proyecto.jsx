function Proyecto({ proyecto }) {
    const { nombre, descripcion, areas, tecnologias, url, github } = proyecto;
  return (
    <div className="mt-3">
        <h3 className="text-lg font-bold text-center">{ nombre }</h3>

        <div className="text-center mb-1 flex gap-1 justify-center items-center">
            { areas.map( area => (
                <span
                key={ Date.now().toString(36).substring(2) + Math.random().toString(36).substring(2) }
                className="text-primary text-sm">{area}</span>
            )) }
        </div>

        <p className="text-center">
            { descripcion }
        </p>
        
        <div className="text-center my-3">
            <a href={url} target="_blank" rel="noreferrer"
                className="bg-primary text-white rounded-lg p-1 px-2"
            ><i class="bi bi-box-arrow-up-right"></i> Ver proyecto</a>
            {
                github ? (<a href={github} target="_blank" rel="noreferrer"
                className="rounded-lg p-1 block mt-2"
            ><i className="bi bi-github"></i> Ver código</a>) : null
            }
        </div>
        <div className="text-center flex gap-1 justify-center items-center">
            { tecnologias.map( tecnologia => (
                <span
                key={ Date.now().toString(36).substring(2) + Math.random().toString(36).substring(2) }
                className="text-red-500 text-sm hover:bg-red-500 hover:text-white cursor-pointer">{tecnologia}</span>
            )) }
        </div>
    </div>
  )
}

export default Proyecto