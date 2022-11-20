import React from "react";
import "./FechaCitaContainer.scss";
import SectionBannerCita from "./SectionBannerCita/SectionBannerCita";
import ProgramadorContainer from "./ProgramadorContainer/ProgramadorContainer";
import FlechitaC from "./FlechitaC/FlechitaC";
import AgregarGoogle from "./AgregarGoogle/AgregarGoogle";

const FechaCitaContainer = () => {
    return (
    <div className="fechacitacontainer">
        <SectionBannerCita/>
        <FlechitaC/>
        <ProgramadorContainer/>
        <AgregarGoogle/>
    </div>)
}

export default FechaCitaContainer