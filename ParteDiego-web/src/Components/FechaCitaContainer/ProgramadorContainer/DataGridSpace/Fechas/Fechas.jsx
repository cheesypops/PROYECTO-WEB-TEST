import React from "react";
import "./Fechas.scss";
import FechaData from "./FechaData/FechaData";

import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Fechas = ({horarios, dui}) => {
    //let idcontador = 0;

    //hacer funcion q reciba en un submit, los datos de la cita y q agregue dentro de otro json esos datos y el dui
    //q cree basicamente un objeto de tipo cita
    //{
      //  duiUser: "12345678-8",
        //fechaCita: "07/01/2022",
        //confirmacion: true, --> darle valor null
        //lugar: "Hospital Nacional",
        //hora: "17:00" -->darle valor null, ya q la hora la registra el admin 
    //}

    let cita = {};//variable donde se contiene la cita a almacenar

    const onSubmitHandler = (e) =>{
        e.preventDefault();


        const data = new FormData(e.target);
        console.log(data.key);


    }

    return (
    <form className="fechas" onSubmit={onSubmitHandler}>
        {horarios.map((horario) => {
            return (<FechaData key={horario._id} horario={horario}/>);
        })}
    </form>)
}

export default Fechas