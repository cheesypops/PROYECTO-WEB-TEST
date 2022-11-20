import React from "react";
import "./CitasProg.scss";
import DataUser from "./DataUser/DataUser";

const CitasProg = ({name, citas}) => {

    {/**CREAR FUNCION QUE POR CADA ELEMENTO EN BUSCARCITA, CREE UN DATAUSER */}

    const retornarCitas = ()=>{
        citas.forEach(cita => {
            console.log(cita)
        });
    }

    return (
    <div className="citasprog">
        {citas.map((cita) => {
            return (<DataUser name={name} cita={cita}/>);
        })}    
    </div>)
}

export default CitasProg