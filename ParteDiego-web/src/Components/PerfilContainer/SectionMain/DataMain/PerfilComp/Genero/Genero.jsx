import React from "react";
import "./Genero.scss";

const Genero = ({gen}) => {
    return (
    <div className="genero">
        <div><figure><img src="" alt="genero" /></figure></div>
        <div><p>{gen}</p></div>
    </div>)
}

export default Genero