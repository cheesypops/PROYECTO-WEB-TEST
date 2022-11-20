import React from "react";
import "./SectionMain.scss";
import Image from "./Image/Image"
import DataMain from "./DataMain/DataMain";

const SectionMain = ({perfil}) => {

    return (
    <div className="sectionmain">
        <Image/>
        <DataMain perfil={perfil}/>
    </div>)
}

export default SectionMain