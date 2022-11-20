import React from "react";
import "./VistaPrincipalContainer.scss";
import BotonDonar from "./BotonDonar/BotonDonar";

import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const  VistaPrincipalContainer = () => {
    //FUNCIONES DE NAVEGACION
    let history = useNavigate();

    //HACER ALGUNA FUNCION PA Q VERIFIQUE SI LA SESION ESTA INICIADA O NO, ASI CAMBIAR
    //LA RUTA Q SE LE MANDA AL EVENTO ONCLICK DEL BOTON
    const handleClickDonar = () => {//funcion para enviar a la seleccion de la fecha de la cita
        history("/requisitos");
    }

    return (
        <div className="vistamaincontainer">
            <section className="bannermain">
                <div className="contenedor">
                    <div className="txtcon">
                        <h3>Bienvenidos</h3>
                        <h1>Haz tu donación</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sapiente porro atque dolorum nostrum quo molestias praesentium, consequatur minus totam eos.
                        </p>
                        <BotonDonar onClick={handleClickDonar}/>
                    </div>
                    <div className="imgcon">
                        <figure><img src="../src/assets/img/bannermain.png" alt="banner" /></figure>
                    </div>
                </div>
            </section>
            <section className="graficas">
                <div className="contenedor2">
                    <h1>Donaciones de sangre</h1>
                    <p>
                        La donación de sangre entera es el tipo más común de donación de sangre. Durante esta donación, 
                        donas aproximadamente una pinta (más o menos medio litro)
                        de sangre entera. Luego, la sangre se separa en sus componentes: glóbulos rojos, plasma y, a veces, plaquetas.
                    </p>
                    <button>no se si quitarlo xd</button>
                    <div className="graficasimg">
                        <figure><img src="../src/assets/img/grafico1.png" alt="grafica" /></figure>
                        <figure><img src="../src/assets/img/grafico2.png" alt="grafica" /></figure>
                        <figure><img src="../src/assets/img/grafico3.png" alt="grafica" /></figure>
                    </div>
                </div>
            </section>
            <section className="compartiendovidas">
                <div className="contenedor3">
                    <figure><img src="../src/assets/img/perfil.png" alt="img" /></figure>
                    <div className="texto1">
                        <h3>BIENVENIDOS</h3>
                        <h1>Compartiendo vidas</h1>
                        <p>
                            La donación de sangre entera es el tipo más común de donación de sangre. Durante esta donación, 
                            donas aproximadamente una pinta (más o menos medio litro) de sangre entera. 
                            Luego, la sangre se separa en sus componentes: glóbulos rojos, plasma y, a veces, plaquetas.
                        </p>
                    </div>
                </div>
            </section>
            <section className="nuestroequipo">
                <div className="contenedor4">
                    <h2>EQUIPO</h2>
                    <h1>Nuestro equipo</h1>
                    <p>Ojala EMA sirviera para algo unu</p>
                    <div className="tarjetascontainer">
                        <div className="tarjeta">
                            <figure><img src="../src/assets/img/akali.jpg" alt="" /></figure>
                            <div className="info">
                                <h2>Claudia Chávez</h2>
                                <p>no se, algo</p>
                            </div>
                        </div>
                        <div className="tarjeta">
                            <figure><img src="../src/assets/img/akali.jpg" alt="" /></figure>
                            <div className="info">
                                <h2>Fernando Figueroa</h2>
                                <p>no se, algo x2</p>
                            </div>
                        </div>
                        <div className="tarjeta">
                            <figure><img src="../src/assets/img/akali.jpg" alt="" /></figure>
                            <div className="info">
                                <h2>Diego Viana</h2>
                                <p>le gusta el pan con queso</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
}


export default VistaPrincipalContainer