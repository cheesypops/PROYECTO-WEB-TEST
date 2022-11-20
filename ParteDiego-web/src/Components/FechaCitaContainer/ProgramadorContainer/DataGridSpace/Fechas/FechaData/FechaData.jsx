import React from "react";
import "./FechaData.scss";
import InfoGen from "./InfoGen/InfoGen";

import { MdEditCalendar } from "react-icons/md";

const FechaData = () => {
    return (
    <div className="fechadata">
        <figure><MdEditCalendar/></figure>
        <InfoGen/>
    </div>)
}

export default FechaData