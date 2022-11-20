import React from "react";
import "./SectionGeneral.scss";
import InfoGeneral from "./InfoGeneral/InfoGeneral";
import Flechita2 from "./Flechita2/Flechita2"
import Citas from "./Citas/Citas"
import BotonesCont from "./BotonesCont/BotonesCont"

const SectionGeneral = ({perfil, handleClick, handleClick2}) => {

    {/**CREACION DE FUNCION DE EDICION DEL PERFIL */}

    return (
    <div className="sectiongeneral">
        <InfoGeneral perfil={perfil}/>
        <Flechita2/>
        <Citas dui={perfil.dui} name={perfil.name}/>
        <BotonesCont handleClick={handleClick} handleClick2={handleClick2}/>
    </div>)
}

export default SectionGeneral