import React from "react";
import "./EditarPerfilContainer.scss";
import BannerEditarPerf from "./BannerEditarPerf/BannerEditarPerf";
import FlechitaC from "./FlechitaC/FlechitaC";
import SectionEditarPerfil from "./SectionEditarPerfil/SectionEditarPerfil";
import BotonEditarP from "./BotonEditarP/BotonEditarP";


import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditarPerfilContainer = ({perfil}) => {
    let history = useNavigate();

    const handleClickPerfil = () => {
        history("/perfil");//ruta del perfil si cancela
    }

    const handleEditPerfil = (data) => {
        //OBTENER EL ID DEL USUARIO A EDITAR, EL DUI
        const idEdit = perfil.dui;


        //hacer las funciones pertinentes pa editar el perfil------------------------------------
        //VARIABLE Q CONFIRMA SI FUE EXITOSO O NO
        let exito = true;

        //NO SE, CODIGO PARA EDITAR EL USUARIO EN LA BASE DE DATOS, PROBABLEMENTE METER
        //EL IF DE ABAJO EN UN TRY-CATCH


        //MENSAJES PARA EL CASO DE EXITO Y FALLO
        if(exito){//si todo sale bien
            Swal.fire({
                title: '¡Felicidades, tu perfil ha sido editado con éxito!',
                text: "Edicion exitosa...",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Entiendo'
            }).then((result) => {
                if (result.isConfirmed) {
                    handleClickPerfil();
                }
            })
        }else{//si no se pudo insertar por algun error
            Swal.fire({
                title: 'Ha ocurrido un error en la edición del perfil',
                text: "Intentalo mas tarde...",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Entiendo'
            }).then((result) => {
                if (result.isConfirmed) {
                    handleClickPerfil();
                }
            })
        }
    }

    //VARIABLE Q ALMACENA LOS DATOS EDITABLES
    const editData = {//solo 3 campos pueden ser editados
        nameE: null,
        tel: null,
        telE: null
    }

    //FUNCION DEL SUBMIT Q OBTIENE LOS DATOS DEL FORMULARIO
    const submitHandler = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        //verificar si estan todos los campos llenos
        if(!data.get("tel") || !data.get("nameE") || !data.get("telE")){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa todos los datos',
                footer: '<a href=""></a>'
            })
        }else{

            editData.nameE = (data.get("nameE"));
            editData.tel = (data.get("tel"));
            editData.telE = (data.get("telE"));

            handleEditPerfil(editData);
        }
    }

    return (
    <div className="editarperfilcontainer">
        <BannerEditarPerf/>
        <FlechitaC/>
        <form onSubmit={submitHandler}>
            <SectionEditarPerfil/>
            <BotonEditarP type={"submit"} handleClickPerfil={handleClickPerfil}/>
        </form>
    </div>)
}

export default EditarPerfilContainer