//src/components/Checkbox.jsx
import React from "react";

const Checkbox = ({ isChecked, onchange})=>{
    className ="check";
    return(
        <input type="Checkbox" checked={isChecked} onChange={onchange}/>
    );
};

export default Checkbox;