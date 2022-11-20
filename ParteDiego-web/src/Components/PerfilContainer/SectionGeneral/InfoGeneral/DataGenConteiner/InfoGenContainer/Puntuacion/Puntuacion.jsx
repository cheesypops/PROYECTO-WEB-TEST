import React from "react";
import "./Puntuacion.scss";

const Puntuacion = ({puntos}) => {
    return (
    <div className="puntuacion">
        <div><figure><img src="" alt="score" /></figure></div>
        <div><p>{puntos}</p></div>
    </div>)
}

export default Puntuacion