import React from "react";
import "./TipoSangre.scss";

const TipoSangre = ({sangre}) => {
    return (
    <div className="sangre">
        <div><figure><img src="" alt="tipo" /></figure></div>
        <div><p>{sangre}</p></div>
    </div>)
}

export default TipoSangre