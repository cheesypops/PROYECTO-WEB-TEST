import React from "react";
import "./C8.scss";

const C8 = () => {
    return (
    <div className="c8">
        <figure><img src="" alt="tel" /></figure>
        <div>
            <input type="tel" placeholder="Telefono de emergencia, ej: 1234-5678" id="tel-e" pattern="[2, 6, 7][0-9]{3}-[0-9]{4}" name="telE"/>
        </div>
    </div>)
}

export default C8