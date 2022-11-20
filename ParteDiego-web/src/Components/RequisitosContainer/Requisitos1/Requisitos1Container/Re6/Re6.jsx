import React from "react";
import "./Re6.scss";

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const Re6 = () => {
    return (
    <div className="re6">
        <div className="req">
            <div className="info" id="info6">?</div>
            <div className="question">
                <p>¿Ha presentado indicios de niveles altos o bajos de presión arterial en los últimos 5 días?</p>
            </div>
        </div>
        <div className="entry">
            <label htmlFor="1"><input type="radio" name="ten" id="1" value="si"/>Si.</label>

            <label htmlFor="0"><input type="radio" name="ten" id="0" value="no"/>No.</label>
        </div>
    </div>)
}

tippy('#info6', {
    content: "Algunos sintomas pueden ser mareos, desmayos y confusión.",
});

export default Re6