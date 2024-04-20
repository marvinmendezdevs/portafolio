import {Dispatch, SetStateAction} from 'react';
import Navegation from "./Navegation";
import SocialMedia from "./SocialMedia";

type Colum1Type = {
  space: number;
  setSpace: Dispatch<SetStateAction<number>>;
}

function Colum1({space, setSpace} : Colum1Type) : React.JSX.Element {
  return (
    <div className="md:h-screen flex flex-col pt-20 pb-10">
        <div className="flex-grow">
          <h1 className="text-white font-black text-4xl">Marvin Méndez</h1>
          <p className="text-white font-bold my-2">
            Software developer Engineer
          </p>
          <p className="md:w-3/4 my-8">
            Passionate web developer crafting stunning, functional websites and applications
          </p>

          <SocialMedia
            display={'md:hidden'}
            size={'w-8 h-8'}
          />

          <Navegation
            space={ space }
            setSpace={ setSpace }
          />
        </div>

        <SocialMedia
          display={'hidden md:flex'}
          size={'w-5 h-5'}
        />
    </div>
  )
}

export default Colum1