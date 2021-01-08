import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarOption.css";

function SidebarOption({ title, playlist, Icon, linkto }) {
	let history = useHistory();
	let playlistExist = playlist !== undefined;

	const handleClick = () => {
		if (playlistExist)
		history.push(`${linkto}/${playlist?.id}`);
		else
		history.push(linkto);
	};

	const NormalOption = () => (
		Icon ? <h4>{title}</h4> : <p>{title}</p>
	);

	const PlaylistOption = () => (
		Icon ? <h4>{playlist?.name}</h4> : <p>{playlist?.name}</p>
	);

	return (
		<div className="sidebarOption" onClick={handleClick}>
			{Icon && <Icon className="sidebarOption__icon" />}
			{playlistExist ? <PlaylistOption/> : <NormalOption/>}
		</div>
	);
}

export default SidebarOption;
