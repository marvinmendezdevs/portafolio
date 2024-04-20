import {Dispatch, SetStateAction} from 'react';

type Colum1Type = {
  space: number;
  setSpace: Dispatch<SetStateAction<number>>;
}

function Navegation({ space, setSpace } : Colum1Type) {
  function handleSpace(e : React.MouseEvent<HTMLAnchorElement>){
    setSpace(Number(e.currentTarget.dataset.link));
  }
  return (
    <nav className="mt-14">
      <a className="flex items-center gap-1 p-1" href="#" data-link="1" onClick={ handleSpace }>
        <span className={`${space === 1 ? 'w-14' : 'w-8'} transition-all h-0.5 bg-slate-600 block`}></span>About
      </a>
      <a className="flex items-center gap-1 p-1" href="#" data-link="2" onClick={ handleSpace }>
        <span className={`${space === 2 ? 'w-14' : 'w-8'} transition-all h-0.5 bg-slate-600 block`}></span>Experiences
      </a>
      <a className="flex items-center gap-1 p-1" href="#" data-link="3" onClick={ handleSpace }>
        <span className={`${space === 3 ? 'w-14' : 'w-8'} transition-all h-0.5 bg-slate-600 block`}></span>Projects
      </a>
    </nav>
  )
}

export default Navegation