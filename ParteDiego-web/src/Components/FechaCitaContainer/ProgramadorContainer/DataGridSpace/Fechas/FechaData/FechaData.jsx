import React from "react";
import "./FechaData.scss";
import InfoGen from "./InfoGen/InfoGen";

import { MdEditCalendar } from "react-icons/md";

const FechaData = ({horario}) => {
    return (
    <div className="fechadata">
        <figure><MdEditCalendar/></figure>
        <InfoGen horario={horario}/>
    </div>)
}

export default FechaData