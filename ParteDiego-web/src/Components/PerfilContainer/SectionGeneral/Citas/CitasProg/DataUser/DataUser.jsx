import React from "react";
import "./DataUser.scss";
import DataGen from "./DataGen/DataGen";

const DataUser = ({name, cita}) => {
    return (
    <div className="datauser">
        <figure><img src="../src/assets/img/PersonIcon.png" alt="user" /></figure>
        <DataGen name={name} cita={cita}/>
    </div>)
}

export default DataUser