import React from "react";
import "./Fecha.scss";

const Fecha = ({fecha}) => {

    {/**CREAR FUNCION PARA DAR FORMATO A LA FECHA */}

    return (
    <div className="fecha">
        <figure><img src="" alt="calendar" /></figure>

        <p>{fecha}</p>{/*aqui insertar la fecha, quiza hacer funcion q de formato */}
    </div>)
}

export default Fecha