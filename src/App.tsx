import { useContext, useEffect, useState } from "react"
import Colum1 from './components/Colum1';
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import { langContext } from "./context/LangContext";

function App() {
  const lang = useContext(langContext);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [space, setSpace] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    title: '',
  });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);


  useEffect(() => {
        const getPersonalInformation = async () => {
      try {
        const response = await fetch('https://portafolio-backend-w3a6.onrender.com/personal-information');
        const result = await response.json();

        if(result.status !== 'ok') throw Error('Error al descargar la información')
        const { data } = result

        console.log(data)
        
        setPersonalInfo({
          name: data.name,
          title: data.title[lang]
        })
      } catch (error) {
        console.error('Error al obtener la información personal:', error);
      }
    };

    getPersonalInformation();
  }, [lang]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto max-w-7xl">
      <div className="cursor -z-10 fixed rounded-full bg-red-50 -translate-x-1/2 -translate-y-1/2" style={{ left: cursor.x, top: cursor.y, height: '30vw', width: '30vw' }}></div>
      <div>
        <Colum1
          personalInfo={ personalInfo }
          space={space}
          setSpace={setSpace}
        />
      </div>
      <div className="md:flex flex-col overflow-y-auto py-10 md:h-screen">
        {
          space === 1 ? <About />
            : space === 2 ? <Experience />
              : <Project />
        }
      </div>
    </div>
  )
}

export default App
