import React from "react";
import "./InfoGen.scss";
import Fecha from "./Fecha/Fecha";
import Cupos from "./Cupos/Cupos";
import SeleccionarFecha from "./SeleccionarFecha/SeleccionarFecha";

const InfoGen = ({horario}) => {
    return (
    <div className="infogen">
        <Fecha fecha={horario.fechaCita}/>
        <Cupos cupos={horario.cupos} ocupados={horario.ocupados}/>
        <SeleccionarFecha type="submit"/>
    </div>)
}

export default InfoGen