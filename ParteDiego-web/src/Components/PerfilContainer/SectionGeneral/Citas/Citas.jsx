import React from "react";
import "./Citas.scss";
import Buscador from "./Buscador/Buscador"
import CitasProg from "./CitasProg/CitasProg";

const Citas = ({dui, name}) => {

    {/**CREACION DE ARREGLO DE CITAS */}
    const citas = [
        {
            duiUser: "12345678-8",
            fechaCita: "07/01/2022",
            confirmacion: true,
            lugar: "Hospital Nacional",
            hora: "17:00"
        },{
            duiUser: "12345678-6",
            fechaCita: "07/02/2022",
            confirmacion: true,
            lugar: "Hospital Nacional",
            hora: "17:00"
        },{
            duiUser: "12345678-6",
            fechaCita: "07/07/2022",
            confirmacion: true,
            lugar: "Hospital Nacional",
            hora: "17:00"
        },{
            duiUser: "12345678-8",
            fechaCita: "07/04/2022",
            confirmacion: true,
            lugar: "Hospital Nacional",
            hora: "17:00"
        }
    ]

    {/**CREACION DE LA FUNCION Q BUSCA EL CONJUNTO DE CITAS EN BASE AL DUI */}

    const buscarCita = () =>{
        const cita = citas.find((cita) => cita.duiUser === dui);

        if (!cita) {
            return [];
        }

        const _citas = citas.filter(cita=> cita.duiUser === dui);

        return _citas;
    }


    let citasArray = buscarCita();

    return (
    <div className="citas">
        <h1>Tus citas...</h1>
        <CitasProg name={name} citas={citasArray}/>
    </div>)
}

export default Citas