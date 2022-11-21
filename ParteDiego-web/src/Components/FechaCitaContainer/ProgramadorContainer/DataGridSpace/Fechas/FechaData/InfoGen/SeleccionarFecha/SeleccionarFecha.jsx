import React from "react";
import "./SeleccionarFecha.scss";

const SeleccionarFecha = ({type}) => {
    return (
    <div className="seleccionarfecha">
        <button type={type}>Seleccionar</button>
    </div>)
}

export default SeleccionarFecha