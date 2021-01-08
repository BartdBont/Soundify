import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateProviderValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

function Header() {
	let history = useHistory();
	const [{ user }, dispatch] = useStateProviderValue();
	const [term, setTerm] = useState("");

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			setTerm("");
			history.push(`/search/${term}`);
		}
	};

	return (
		<div className="header">
			<div className="header__left">
				<SearchIcon />
				<input
					placeholder="Search for Artists or Songs"
					type="text"
					onKeyDown={handleKeyDown}
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
			</div>

			<div className="header__right">
				<Avatar src={user?.images[0]?.url} alt={user?.username} />
				<h4>{user?.username}</h4>
			</div>
		</div>
	);
}

export default Header;
