import { useEffect, useState } from "react";
import { projects } from '../data/experiences';

type projectsType = {
  id: number;
  title: string;
  link: string;
  description: string;
  label: string[];
}

function Project() {
  const [data, setData] = useState<projectsType[]>([]);

  useEffect(() => {
    const newData = projects.reverse();
    
    setData(newData);        
  }, []);
  return (
    <>
    <h2 className="text-2xl text-white font-bold mb-3">Professional Projects</h2>
      { data.map(experience => (
        <div key={experience.id} className="mb-5">
          <div>
              <h3 className="text-white font-bold">{experience.title}</h3>
              <a className="flex items-center gap-1 mb-3 hover:underline" href={experience.link} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg> Ver proyecto
              </a>
              <p className="text-sm">{experience.description}</p>

              <div className="mt-2 flex gap-1 flex-wrap">
                { experience.label.map( (label, index) => (
                  <span key={index} className="inline-block py-0.5 px-2 text-xs rounded-full bg-slate-700">{label} </span>
                )) }
              </div>
          </div>
      </div>
      ))}
    </>
  )
}

export default Project