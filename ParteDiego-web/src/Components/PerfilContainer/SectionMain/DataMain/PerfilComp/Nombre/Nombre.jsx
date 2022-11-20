import React from "react";
import "./Nombre.scss";

const Nombre = ({name}) => {
    return (
    <div className="nombre">
        <div><figure><img src="" alt="name" /></figure></div>
        <div><p>{name}</p></div>
    </div>)
}

export default Nombre