import React from "react";
import "./FechaCitaContainer.scss";
import SectionBannerCita from "./SectionBannerCita/SectionBannerCita";
import ProgramadorContainer from "./ProgramadorContainer/ProgramadorContainer";
import FlechitaC from "./FlechitaC/FlechitaC";
import AgregarGoogle from "./AgregarGoogle/AgregarGoogle";

const FechaCitaContainer = ({perfil}) => {
    return (
    <div className="fechacitacontainer">
        <SectionBannerCita/>
        <FlechitaC/>
        <ProgramadorContainer dui={perfil.dui}/>
        <AgregarGoogle/>
    </div>)
}

export default FechaCitaContainer