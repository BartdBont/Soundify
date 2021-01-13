import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlaylistService from "../Services/PlaylistService";
import "./YourPlaylist.css";

function YourPlaylist({ spotify }) {
	const [playlist, setPlaylist] = useState();
	const { id } = useParams();

	useEffect(() => {
		PlaylistService.getPlaylist(id).then((response) => {
			setPlaylist(response);
		});
	}, [id]);

	const EmptyPlaylist = () => (
		<div className="emptyPlaylist">
			<h1>This playlist is currently empty</h1>
			<h4>Find more of the music you love in the charts</h4>
		</div>
	);

	const handleOptions = () => {
		//open menu to delete playlist
	}

	return (
		<div>
			<div className="body__info">
				{/* <img src={discover_weekly?.images[0].url} alt="" /> */}
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>{playlist?.name}</h2>
					<p>{playlist?.description}</p>
				</div>
			</div>

			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon className="body__shuffle" />
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon onClick={handleOptions}/>
				</div>

				{playlist?.songs.length ? (
					playlist?.songs.map((song) => <SongRow search={false} song={song} playlist={playlist}/>)
				) : (
					<EmptyPlaylist />
				)}
			</div>
		</div>
	);
}

export default YourPlaylist;
