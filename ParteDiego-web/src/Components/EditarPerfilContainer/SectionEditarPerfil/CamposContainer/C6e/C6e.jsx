import React from "react";
import "./C6e.scss";

const C6e = () => {
    return (
    <div className="c6e">
        <figure><img src="" alt="tel" /></figure>
        <div>
            <input name="tel" type="tel" placeholder="Número de telefono, ej: 7234-5678" id="tel" pattern="[2, 6, 7][0-9]{3}-[0-9]{4}"/>
        </div>
    </div>)
}

export default C6e