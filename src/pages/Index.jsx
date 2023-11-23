import Aside from "../components/Aside";
import Acercade from "./Acercade";
import AsideDerecho from "../components/AsideDerecho";
import { Outlet } from "react-router-dom";

function Index(){

    return (
        <div className="lg:flex">
            <Aside />
            <div className="w-full py-10">
                <div className="container flex flex-col-reverse mx-auto lg:grid gap-5 grid-cols-layout p-5 overflow-y-scroll h-screen">
                    <Outlet />
                    <AsideDerecho /> 
                </div>
            </div>
        </div>
    )
}

export default Index;