import React from "react";
import "./Datamain.scss";
import PerfilComp from "./PerfilComp/PerfilComp"

const DataMain = ({perfil}) => {
    return (
    <div className="datamain">
        <h2>Perfil</h2>
        <PerfilComp perfilmain={perfil}/>
    </div>)
}

export default DataMain