import React, { useState } from "react"; 
import { useDispatch } from "react-redux";
import { switchMode } from '../../redux/mode/actionCreators';
import "./ToggleSwitch.scss";

export const ToggleSwitch = () => { 
    const [isChecked, setIsChecked] = useState<boolean>(true);
	const dispatch = useDispatch();
    const handleToggle = () => {
		dispatch(switchMode(isChecked))
        setIsChecked(!isChecked);
    };
return ( 
	<div className="container"> 
	<span className={isChecked ? "label-text-dark" : "label-text"}>{isChecked ? "Dark" : "Light"}{" "}</span>
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


