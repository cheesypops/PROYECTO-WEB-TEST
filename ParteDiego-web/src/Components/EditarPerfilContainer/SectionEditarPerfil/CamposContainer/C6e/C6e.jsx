import React from "react";
import "./C6e.scss";

import { MdLocalPhone } from "react-icons/md";

const C6e = () => {
    return (
    <div className="c6e">
        <figure><MdLocalPhone/></figure>
        <div>
            <input name="tel" type="tel" placeholder="Número de telefono, ej: 7234-5678" id="tel" pattern="[2, 6, 7][0-9]{3}-[0-9]{4}"/>
        </div>
    </div>)
}

export default C6e