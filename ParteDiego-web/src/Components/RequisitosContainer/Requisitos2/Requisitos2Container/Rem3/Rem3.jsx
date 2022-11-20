import React from "react";
import "./Rem3.scss";

const Rem3 = () => {
    return (
    <div className="rem3">
        <div className="req">
            <div className="info">?</div>
            <div className="question">
                <p>Tiempo desde ultimo parto</p>
            </div>
        </div>
        <div className="entry">
            <label htmlFor="1"><input type="radio" name="parto" id="1" value="7"/>Mas de 6 meses</label>

            <label htmlFor="0"><input type="radio" name="parto" id="0" value="5"/>Menos de 6 meses</label>
        </div>
    </div>)
}

export default Rem3