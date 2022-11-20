import React from "react";
import "./C2.scss";

import { MdPermIdentity } from "react-icons/md";

const C2 = () => {
    return (
    <div className="c2">
        <figure><MdPermIdentity/></figure>
        <div>
            <input type="text" placeholder="DUI" id="dui" name="dui"/>
        </div>
    </div>)
}

export default C2