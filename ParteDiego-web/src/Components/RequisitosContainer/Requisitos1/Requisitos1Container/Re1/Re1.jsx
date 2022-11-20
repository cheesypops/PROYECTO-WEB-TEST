import React from "react";
import "./Re1.scss";

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const Re1 = () => {

    return (
    <div className="re1">
        <div className="req">
            <div className="info" id="info1">?</div>
            <div className="question">
                <p>¿Ha presentado fiebre en los últimos 7 días?</p>
            </div>
        </div>
        <div className="entry">
            <label htmlFor="1"><input type="radio" name="no" id="1" value="si"/>Si.</label>

            <label htmlFor="0"><input type="radio" name="no" id="0" value="no"/>No.</label>
        </div>
    </div>)
}

tippy('#info1', {
    content: "Temperatura igual o mayor a 38°.",
});

export default Re1