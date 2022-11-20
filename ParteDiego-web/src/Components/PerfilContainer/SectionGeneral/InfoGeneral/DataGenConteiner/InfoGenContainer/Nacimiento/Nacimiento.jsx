import React from "react";
import "./Nacimiento.scss";

const Nacimiento = ({nacimiento}) => {
    return (
    <div className="nacimiento">
        <div><figure><img src="" alt="calendar" /></figure></div>
        <div><p>{nacimiento}</p></div>
    </div>)
}

export default Nacimiento