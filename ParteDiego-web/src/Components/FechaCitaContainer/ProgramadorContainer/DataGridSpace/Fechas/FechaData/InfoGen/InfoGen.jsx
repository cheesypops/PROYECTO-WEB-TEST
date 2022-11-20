import React from "react";
import "./InfoGen.scss";
import Fecha from "./Fecha/Fecha";
import Cupos from "./Cupos/Cupos";
import SeleccionarFecha from "./SeleccionarFecha/SeleccionarFecha";

const InfoGen = () => {
    return (
    <div className="infogen">
        <Fecha/>
        <Cupos/>
        <SeleccionarFecha/>
    </div>)
}

export default InfoGen