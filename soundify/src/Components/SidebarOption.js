import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./SidebarOption.css";

function SidebarOption({ title, Icon, linkto }) {
	let history = useHistory();

	const handleClick = () => {
		history.push(linkto);
	};

	return (
		<div className="sidebarOption" onClick={handleClick}>
			{Icon && <Icon className="sidebarOption__icon" />}
			{Icon ? <h4>{title}</h4> : <p>{title}</p>}
		</div>
	);
}

export default SidebarOption;
