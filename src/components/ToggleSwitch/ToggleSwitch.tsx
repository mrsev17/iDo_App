import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { switchMode } from '../../redux/mode/actionCreators';
import { RootState } from "../../redux/store";
import "./ToggleSwitch.scss";


export const ToggleSwitch: React.FC = () => { 
	const isChecked = useSelector((state: RootState) => state.mode.toggle);
    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(switchMode(!isChecked));
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


