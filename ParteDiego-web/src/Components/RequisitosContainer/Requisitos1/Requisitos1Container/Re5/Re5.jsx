import React from "react";
import "./Re5.scss";

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const Re5 = () => {
    return (
    <div className="re5">
        <div className="req">
            <div className="info" id="info5">?</div>
            <div className="question">
                <p>¿Ha visitado zonas endémicas?</p>
            </div>
        </div>
        <div className="entry">
            <label htmlFor="1"><input type="radio" name="ende" id="1" value="si"/>Si.</label>

            <label htmlFor="0"><input type="radio" name="ende" id="0" value="no"/>No.</label>
        </div>
    </div>)
}

tippy('#info5', {
    content: "Una zona endémica es una zona donde ha habido un brote de virus o múltiples casos de contagios.",
});

export default Re5