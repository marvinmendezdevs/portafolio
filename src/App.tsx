import { useEffect, useState } from "react"
import Colum1 from './components/Colum1';
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";

function App() {
  const [cursor, setCursor] = useState({x: 0, y: 0});
  const [space, setSpace] = useState(1);

  useEffect(() => {
    const updatePosition = (e : MouseEvent) => {
      setCursor({x: e.clientX, y: e.clientY})
    }

    window.addEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto max-w-7xl">
      <div className="cursor -z-10 fixed rounded-full bg-red-50 -translate-x-1/2 -translate-y-1/2" style={{left: cursor.x, top: cursor.y, height: '30vw', width: '30vw'}}></div>
      <div>
        <Colum1
          space={ space }
          setSpace={ setSpace }
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
