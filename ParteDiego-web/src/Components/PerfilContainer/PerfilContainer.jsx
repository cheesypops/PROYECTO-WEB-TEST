import React, { useState, useEffect } from "react";
import "./PerfilContainer.scss";
import SectionMain from "./SectionMain/SectionMain"
import Flechita from "./Flechita/Flechita";
import SectionGeneral from "./SectionGeneral/SectionGeneral";

import {useNavigate } from 'react-router-dom';

const PerfilContainer = ({perfil}) => {
    //-------------
    let history = useNavigate();

    const handleClick = () => {//funcion para ir a pagina de inicio
        history("/");
    }
    const handleClick2 = () => {//funcion para ir a vista de editar perfil
        history("/editar-perfil");
    }
    

    {/**CREAR UNA FUNCION PARA OBTENER LOS DATOS DE UN PERFIL */}

    const Pmain = {
        nombre: perfil.name,
        dui: perfil.dui,
        sangre: perfil.sangre,
        genero: perfil.genero
    }

    {/**-------------INICIO DE FUNCIONES------------------------ */}



    return (
    <div className="perfilContainer">
        <SectionMain perfil={perfil}/>
        <Flechita/>
        <SectionGeneral perfil={perfil} handleClick={handleClick} handleClick2={handleClick2}/>
    </div>)
}

export default PerfilContainer