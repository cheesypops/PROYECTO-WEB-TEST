import React from "react";
import "./InfoGenContainer.scss";
import Nacimiento from "./Nacimiento/Nacimiento";
import Telefono from "./Telefono/Telefono";
import NombreE from "./NombreE/NombreE";
import TelefonoE from "./TelefonoE/Telefono";
import Puntuacion from "./Puntuacion/Puntuacion"

const InfoGenContainer = ({perfil}) => {
    return (
    <div className="infogencon">
        <Nacimiento nacimiento={perfil.nacimiento}/>
        <Telefono tel={perfil.telefono}/>
        <NombreE nameE={perfil.nombreE}/>
        <TelefonoE telE={perfil.telefonoE}/>
        <Puntuacion puntos={perfil.puntos}/>
    </div>)
}

export default InfoGenContainer