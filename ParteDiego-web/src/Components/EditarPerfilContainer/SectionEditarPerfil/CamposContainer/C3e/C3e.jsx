import React from "react";
import "./C3e.scss";

const C3e = () => {
    return (
    <div className="c3e">
        <figure><img src="" alt="Sangre" /></figure>
        <div action="">
            <select name="Tipo-Sangre" id="Tipo-Sangre" placeholder="Tipo de sangre" disabled>
                <option value="ORH+">ORH+</option>
                <option value="ORH-">ORH-</option>
            </select>
        </div>
    </div>)
}

export default C3e