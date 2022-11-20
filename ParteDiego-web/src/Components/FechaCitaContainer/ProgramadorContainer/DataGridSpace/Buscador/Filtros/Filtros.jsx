import React from "react";
import "./Filtros.scss";
import Mes from "./Mes/Mes";
import Anio from "./Anio/Anio";

const Filtros = () => {
    return (
    <form className="filtros">
        <Mes/>
        <Anio/>
    </form>)
}

export default Filtros