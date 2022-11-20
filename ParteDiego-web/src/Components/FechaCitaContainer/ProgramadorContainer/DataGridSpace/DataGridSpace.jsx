import React from "react";
import "./DataGridSpace.scss";
import Fechas from "./Fechas/Fechas";
import Buscador from "./Buscador/Buscador";

const DataGridSpace = () => {
    return (
    <div className="datagridspace">
        <Buscador/>
        <Fechas/>
    </div>)
}

export default DataGridSpace