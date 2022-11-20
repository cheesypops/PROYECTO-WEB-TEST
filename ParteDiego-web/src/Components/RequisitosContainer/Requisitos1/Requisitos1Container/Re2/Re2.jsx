import React from "react";
import "./Re2.scss";

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const Re2 = () => {
    return (
    <div className="re2">
        <div className="req">
            <div className="info" id="info2">?</div>
            <div className="question">
                <p>Ingrese su peso</p>
            </div>
        </div>
        <div className="entry">
            {/** tiene q ser un scroll */}
            <input type="number" name="peso" id="peso" step="1" min="30" max="150" placeholder="30" defaultValue="30"/>
            <p>Kg</p>
        </div>
    </div>)
}

tippy('#info2', {
    content: "Mínimo de 30kg y un máximo de 150kg.",
});

export default Re2