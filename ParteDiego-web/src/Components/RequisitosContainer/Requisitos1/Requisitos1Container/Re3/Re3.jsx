import React from "react";
import "./Re3.scss";

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const Re3 = ({onChange}) => {
    return (
    <div className="re3">
        <div className="req">
            <div className="info" id="info3">?</div>
            <div className="question">
                <p>¿Tiene tatuajes o piercings?</p>
            </div>
        </div>
        <div className="entry" onChange={onChange}>
            <label htmlFor="1"><input type="radio" name="piercing" id="1" value="si"/>Si.</label>

            <label htmlFor="0"><input type="radio" name="piercing" id="0" value="no"/>No.</label>
        </div>
    </div>)
}

tippy('#info3', {
    content: "Cualquier tipo de piercing o tamaño de tatuaje.",
});

export default Re3