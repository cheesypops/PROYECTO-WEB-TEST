import React from "react";
import "./Rem1.scss";

const Rem1 = () => {
    return (
    <div className="rem1">
        <div className="req">
            <div className="info">?</div>
            <div className="question">
                <p>¿Presenta indicios de embarazo?</p>
            </div>
        </div>
        <div className="entry">
            <label htmlFor="1"><input type="radio" name="embarazo" id="1" value="si"/>Si.</label>

            <label htmlFor="0"><input type="radio" name="embarazo" id="0" value="no"/>No.</label>
        </div>
    </div>)
}

export default Rem1