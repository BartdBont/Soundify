
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import AddPlaylistDialog from "./AddPlaylistDialog";
import PlaylistService from "../Services/PlaylistService";
import { useStateProviderValue } from "../StateProvider";
import WebsocketService from "../Services/WebsocketService";
import SockJsClient from 'react-stomp';
import { useAlert } from "react-alert";

function Sidebar() {
	let history = useHistory();
	const [{playlistEdited}, dispatch] = useStateProviderValue();
	const [open, setOpen] = useState(false);
	const [playlistss, setPlaylistss] = useState();
	const [edited, setEdited] = useState(false);
	const [alert, setAlert] = useState("");
	const alertToShow = useAlert();

	const handleClick = () => {
		history.push("/");
	};

	const handleAddPlaylist = () => {
		setOpen(true);
	};

	useEffect(() => {
		PlaylistService.getPlaylists().then((response) => {
			setPlaylistss(response);
			dispatch({
				type: "SET_PLAYLISTS",
				playlists: response,
			});
		});
		setEdited(false);
		if (playlistEdited) {
			setAlert("Playlist succesfully deleted!");
		}
		dispatch({
			type: "SET_PLAYLISTEDITED",
			playlists: false,
		});
		console.log(playlistEdited);
	}, [dispatch, edited, playlistEdited]);

	useEffect(() => {
		WebsocketService.connect();
	}, [])

	useEffect(() => {
		if (alert !== "")
		alertToShow.show(alert)
		setAlert("")
	}, [alert, alertToShow])

	const apiUrl = "http://localhost:8080/ws";

	const handleMessage = (msg) => {
		console.log(msg);
		setAlert(msg);
	}

	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://i.imgur.com/dT8rSvy.png"
				alt=""
				onClick={handleClick}
			/>
			<SidebarOption Icon={HomeIcon} title="Home" linkto="/home" />
			<SidebarOption Icon={SearchIcon} title="Search" linkto="/search" />
			<SidebarOption
				Icon={LibraryMusicIcon}
				title="Your Library"
				linkto="/your_library"
			/>

			<br />
			<div className="playlist">
				<strong className="sidebar__title">PLAYLISTS</strong>
				<AddIcon
					className="addIcon"
					fontSize="small"
					onClick={handleAddPlaylist}
				/>
			</div>
			<AddPlaylistDialog open={open} setOpen={setOpen} setEdited={setEdited} />
			<hr />

			{playlistss?.map((playlist, id) => (
				<SidebarOption
					playlist={playlist}
					title={playlist.name}
					linkto="/your_playlist"
					key={id}
				/>
			))}
			{/* <SockJsClient url={apiUrl} topics={["/endpoints/playlist"]} onMessage={(msg) => {handleMessage(msg);}}/> */}
			<SockJsClient
                url={apiUrl}
                topics={[`/endpoint/playlist`]}
                onMessage={(msg) => {
                handleMessage(msg);
                }}
            />
		</div>
	);
}

export default Sidebar;
