import React from "react";
import "./Telefono.scss";

const Telefono = ({tel}) => {
    return (
    <div className="telefono">
        <div><figure><img src="" alt="tel" /></figure></div>
        <div><p>{tel}</p></div>
    </div>)
}

export default Telefono