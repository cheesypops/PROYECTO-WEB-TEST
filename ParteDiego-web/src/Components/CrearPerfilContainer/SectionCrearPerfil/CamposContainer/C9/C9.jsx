import React from "react";
import "../C2/C2.scss";

const C9 = () => {
    return (
    <div className="c2">
        <figure><img src="" alt="contraseña" /></figure>
        <div>
            <input type="password" placeholder="Contraseña" id="password" name="password" pattern=".{8,}"/>
        </div>
    </div>)
}

export default C9