import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button } from "@material-ui/core";
import { useStateProviderValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import AuthenticationService from "../Services/AuthenticationService";

function Header() {
	let history = useHistory();
	const [{ user }, ] = useStateProviderValue();
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
				<Avatar src="" alt={user?.username} />
				<h4>{user?.username}</h4>
				<Button onClick={() => {
					AuthenticationService.logout();
					document.location.reload();
				}}>Logout</Button>
			</div>
		</div>
	);
}

export default Header;
