import React from "react";
import "./ProgramadorContainer.scss";
import DataGridSpace from "./DataGridSpace/DataGridSpace";

const ProgramadorContainer = ({dui}) => {
    return (
    <div className="programadorcontainer">
        <DataGridSpace dui={dui}/>
    </div>)
}

export default ProgramadorContainer