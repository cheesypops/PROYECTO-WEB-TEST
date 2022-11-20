import React from "react";
import "./C5.scss";

import { MdTransgender } from "react-icons/md";

const C5 = () => {
    return (
    <div className="c5">
        <figure><MdTransgender/></figure>
        <div action="">
            <select name="genero" id="Genero">
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select>
        </div>
    </div>)
}

export default C5