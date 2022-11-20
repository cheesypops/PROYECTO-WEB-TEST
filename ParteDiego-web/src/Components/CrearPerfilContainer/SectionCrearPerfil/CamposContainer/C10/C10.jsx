import React from "react";
import "../C2/C2.scss";

const C10 = () => {
    return (
    <div className="c2">
        <figure><img src="" alt="contraseña" /></figure>
        <div>
            <input type="password" placeholder="Verificar contraseña" id="passwordv" name="passwordv" pattern=".{8,}"/>
        </div>
    </div>)
}

export default C10