import React from "react";
import "./PerfilComp.scss";
import Nombre from "./Nombre/Nombre"
import Dui from "./Dui/Dui"
import TipoSangre from "./TipoSangre/TipoSangre"
import Genero from "./Genero/Genero"

const PerfilComp = ({perfilmain}) => {
    return (
    <div className="perfilcomp">
        <Nombre name={perfilmain.name}/>
        <Dui dui={perfilmain.dui}/>
        <TipoSangre sangre={perfilmain.sangre}/>
        <Genero gen={perfilmain.genero}/>
    </div>)
}

export default PerfilComp