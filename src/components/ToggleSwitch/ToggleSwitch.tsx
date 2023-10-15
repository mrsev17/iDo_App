import React, { useState } from "react"; 
import "./ToggleSwitch.scss";

export const ToggleSwitch = () => { 
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    console.log(isChecked)
return ( 
	<div className="container"> 
	<span className={isChecked ? "label-text" : "label-text-dark"}>{isChecked ? "Dark Theme" : "Light Theme"}{" "}</span>
	<div className="toggle-switch"> 
		<input type="checkbox" className="checkbox"
			name="toggleTheme" id="toggleTheme" checked={isChecked} onChange={handleToggle} /> 
		<label className="label" htmlFor="toggleTheme"> 
		<span className="inner" /> 
		<span className="switch" /> 
		</label> 
	</div> 
	</div> 
    ); 
}; 


