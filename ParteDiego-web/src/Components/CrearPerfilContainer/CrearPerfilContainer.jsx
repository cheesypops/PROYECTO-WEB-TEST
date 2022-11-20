import React from "react";
import "./CrearPerfilContainer.scss";
import BannerCrearPerf from "./BannerCrearPerf/BannerCrearPerf";
import FlechitaC from "./FlechitaC/FlechitaC";
import SectionCrearPerfil from "./SectionCrearPerfil/SectionCrearPerfil";
import BotonCrearP from "./BotonCrearP/BotonCrearP";

import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CrearPerfilContainer = () => {
    //FUNCIONES DE NAVEGACION
    let history = useNavigate();

    const handleClickMain = () => {//funcion para enviar al inicio al cancelar
        history("/");
    }

    const CrearPerfil = (dataPerfil) =>{//recibe el json con la info del usuario
        //VARIABLE Q CONFIRMA SI FUE EXITOSO O NO
        let exito = true;

        //NO SE, CODIGO PARA INSERTAR EL USUARIO EN LA BASE DE DATOS, PROBABLEMENTE METER
        //EL IF DE ABAJO EN UN TRY-CATCH


        //MENSAJES PARA EL CASO DE EXITO Y FALLO
        if(exito){//si todo sale bien
            Swal.fire({
                title: '¡Felicidades, tu perfil ha sido creado con éxito!',
                text: "Ya puedes iniciar sesión normalmente...",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Entiendo'
            }).then((result) => {
                if (result.isConfirmed) {
                    handleClickMain();
                }
            })
        }else{//si no se pudo insertar por algun error
            Swal.fire({
                title: 'Ha ocurrido un error en la creación del perfil',
                text: "Intentalo mas tarde...",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Entiendo'
            }).then((result) => {
                if (result.isConfirmed) {
                    handleClickMain();
                }
            })
        }
    }

    //VARIABLE Q ALMACENARA LOS DATOS A GUARDAR---------------------------------------------------------------
    let dataPerfil = {
        email: null,
        dui: null,
        sangre: null,
        nacimiento: null,
        genero: null,
        tel: null,
        nameE: null,
        telE: null,
        password: null,
        puntos: 0,
        name: null//GREGAR EL INPUT DEL NOMBRE DEL USUARIO
    };

    //funcion del submit--------------------------
    const handleSubmit = (e) => {
        e.preventDefault();


        const data = new FormData(e.target);

        //insertar datos obtenidos en e, a la variable dataPerfil
        //verificar si todos los campos estan llenos
        if(!data.get("email") || !data.get("dui") || !data.get("Tipo-Sangre") || !data.get("nacimiento") ||
        !data.get("genero") || !data.get("tel") || !data.get("nameE") || !data.get("telE") || !data.get("password") || 
        !data.get("passwordv") || !data.get("name")){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa todos los datos',
                footer: '<a href=""></a>'
            })
        }else{
            if(data.get("password").lenght < 8 || data.get("passwordv").lenght < 8){
                Swal.fire({
                    icon: 'error',
                    title: 'Oh no...',
                    text: 'La contraseña debe tener al menos 8 carácteres...',
                    footer: '<a href=""></a>'
                })
            }else{
                if(data.get("password") === data.get("passwordv")){//si la contraseña pasa la validacion--------
                    dataPerfil.email = (data.get("email"));
                    dataPerfil.dui = (data.get("dui"));
                    dataPerfil.sangre = (data.get("Tipo-Sangre"));
                    dataPerfil.nacimiento = (data.get("nacimiento"));
                    dataPerfil.genero = (data.get("genero"));
                    dataPerfil.tel = (data.get("tel"));
                    dataPerfil.nameE = (data.get("nameE"));
                    dataPerfil.telE = (data.get("telE"));
                    dataPerfil.password = (data.get("password"));
                    dataPerfil.name = (data.get("name"));

                    //CREAR FUNCION Q VERIFIQUE LOS DATOS ANTES E LLAMAR A LA FUNCION DE INSERCION----------------------------------
                    CrearPerfil(dataPerfil);//llama la funcion q crea el perfil

                }else{//no ha puesto la misma contraseña en ambos campos
                    Swal.fire({
                        icon: 'error',
                        title: 'Oh no...',
                        text: 'Corrobore los campos de contraseña...',
                        footer: '<a href=""></a>'
                    })
                }
            }
        }
    }

    return (
    <div className="crearperfilcontainer">
        <BannerCrearPerf/>
        <FlechitaC/>
        <form onSubmit={handleSubmit}>
            <SectionCrearPerfil/>
            <BotonCrearP type={"submit"} onClickC={handleClickMain}/>
        </form>
    </div>)
}

export default CrearPerfilContainer