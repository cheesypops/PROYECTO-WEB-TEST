import React from "react";
import "./DataGen.scss";
import Fecha from "./Fecha/Fecha";
import HoraConf from "./HoraConf/HoraConf"
import UserName from "./Username/UserName";

const DataGen = ({name, cita}) => {
    return (
    <div className="datagen">
        <UserName name={name} lugar={cita.lugar}/>
        <HoraConf hora={cita.hora}/>
        <Fecha fecha={cita.fechaCita}/>
    </div>)
}

export default DataGen