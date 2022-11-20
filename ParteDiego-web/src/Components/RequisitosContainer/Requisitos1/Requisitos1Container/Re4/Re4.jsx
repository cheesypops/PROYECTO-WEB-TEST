import React from "react";
import "./Re4.scss";

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const Re4 = ({readOnly}) => {
    return (
    <div className="re4">
        <div className="req">
            <div className="info" id="info4">?</div>
            <div className="question">
                <p>¿Hace cuanto tiempo se realizó el tatuaje/piercing?</p>
            </div>
        </div>
        <div className="entry">
            {/** cada 6 meses */}
            <input type="number" name="fecha" id="fecha" min="1" max= "12" placeholder="1" readOnly={readOnly} defaultValue="1"/>
            <p>Menos de un mes (1), mas de un mes(12)</p>
        </div>
    </div>)
}

tippy('#info4', {
    content: "Si fue hace menos de un mes, ingresar 1; si fue hace más de 1 año ingresar 12.",
    appendTo: '#info4',
});

export default Re4