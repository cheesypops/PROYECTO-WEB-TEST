import React from "react";
import "./Fechas.scss";
import FechaData from "./FechaData/FechaData";

const Fechas = ({horarios, dui}) => {
    //let idcontador = 0;

    //hacer funcion q reciba en un submit, los datos de la cita y q agregue dentro de otro json esos datos y el dui
    //q cree basicamente un objeto de cito cita
    //{
      //  duiUser: "12345678-8",
        //fechaCita: "07/01/2022",
        //confirmacion: true, --> darle valor null
        //lugar: "Hospital Nacional",
        //hora: "17:00"
    //}

    let cita = {};//variable donde se contiene la cita a almacenar

    return (
    <div className="fechas">
        {horarios.map((horario) => {
            return (<FechaData horario={horario}/>);
        })}
    </div>)
}

export default Fechas