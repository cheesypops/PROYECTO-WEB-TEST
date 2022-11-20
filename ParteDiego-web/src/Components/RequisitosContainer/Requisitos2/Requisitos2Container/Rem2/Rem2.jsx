import React from "react";
import "./Rem2.scss";

const Rem2 = () => {
    return (
    <div className="rem2">
        <div className="req">
            <div className="info">?</div>
            <div className="question">
                <p>¿Se encuentra en período de lactancia?</p>
            </div>
        </div>
        <div className="entry">
            <label htmlFor="1"><input type="radio" name="lac" id="1" value="si"/>Si.</label>

            <label htmlFor="0"><input type="radio" name="lac" id="0" value="no"/>No.</label>
        </div>
    </div>)
}

export default Rem2