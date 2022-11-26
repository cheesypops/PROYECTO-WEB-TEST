import React from "react";
import "./Filtros.scss";
import Mes from "./Mes/Mes";
import Anio from "./Anio/Anio";
import Mes_max from "./Mes-max/Mes-max";
import Anio_max from "./Anio-max/Anio-max";

const Filtros = () => {
    return (
    <form className="filtros">
        <h1>Seleccionar rango entre: </h1>
        <div>
            <Mes_max/>
            <Anio/>
        </div>
        <h1>y</h1>
        <div>
            <Mes/>
            <Anio/>
        </div>
    </form>)
}

export default Filtros