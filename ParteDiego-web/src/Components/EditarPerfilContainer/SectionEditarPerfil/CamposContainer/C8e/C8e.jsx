import React from "react";
import "./C8e.scss";

const C8e = () => {
    return (
    <div className="c8e">
        <figure><img src="" alt="tel" /></figure>
        <div>
            <input name="telE" type="tel" placeholder="Telefono de emergencia, ej: 1234-5678" id="tel-e" pattern="[2, 6, 7][0-9]{3}-[0-9]{4}"/>
        </div>
    </div>)
}

export default C8e