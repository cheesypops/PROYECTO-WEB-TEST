import React from "react";
import "./DataGridSpace.scss";
import Fechas from "./Fechas/Fechas";
import Buscador from "./Buscador/Buscador";

const DataGridSpace = ({dui}) => {
    //obtener aqui los horarios disponibles
    const horarios = [
        {
            fechaCita: "07/01/2022",
            lugar: "Hospital Nacional",
            hora: "17:00",
            cupos: 20,
            ocupados: 7
        },{
            fechaCita: "07/08/2022",
            lugar: "Hospital ganga",
            hora: "18:00",
            cupos: 20,
            ocupados: 9
        },{
            fechaCita: "07/01/2022",
            lugar: "Hospital pepe",
            hora: "17:00",
            cupos: 20,
            ocupados: 7
        },{
            fechaCita: "07/01/2022",
            lugar: "Hospital no",
            hora: "12:00",
            cupos: 20,
            ocupados: 19
        }
    ]


    return (
    <div className="datagridspace">
        <Buscador/>
        <Fechas horarios={horarios} dui={dui}/>
    </div>)
}

export default DataGridSpace