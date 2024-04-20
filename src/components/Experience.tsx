import { useEffect, useState } from "react";
import { worksExperience } from '../data/experiences';

type worksExperienceType = {
  id: number;
  start: number;
  end: number;
  workplace: string;
  position: string;
  description: string;
  label: string[];
}

function Experience() {
  const [data, setData] = useState<worksExperienceType[]>([]);
  const date = new Date();

  useEffect(() => {
    const newData = worksExperience.reverse();
    
    setData(newData);        
  }, []);

  return (
    <>
      <h2 className="text-2xl text-white font-bold mb-3">My Experience</h2>
      { data.map(experience => (
        <div key={experience.id} className="grid grid-cols-[140px_1fr] mb-5">
          <div>
              {experience.start} - {experience.end === date.getFullYear() ? 'PRESENT' : experience.end}
          </div>
          <div>
              <h3 className="text-white font-bold">{experience.workplace}</h3>
              <p className="text-slate-200">{experience.position}</p>
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

export default Experience