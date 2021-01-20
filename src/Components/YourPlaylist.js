import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlaylistService from "../Services/PlaylistService";
import "./YourPlaylist.css";
import { Menu, MenuItem } from "@material-ui/core";
import DeletePlaylistDialog from "./DeletePlaylistDialog";

function YourPlaylist() {
	const [playlist, setPlaylist] = useState();
	const [remove, setRemove] = useState();
	const [edited, setEdited] = useState();
	const [anchorEl, setAnchorEl] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		PlaylistService.getPlaylist(id).then((response) => {
			setPlaylist(response);
		});
		setEdited(false);
	}, [id, edited]);

	const EmptyPlaylist = () => (
		<div className="emptyPlaylist">
			<h1>This playlist is currently empty</h1>
			<h4>Find more of the music you love in the charts</h4>
		</div>
	);

	const handleOptions = (e) => {
		setAnchorEl(e.currentTarget);
	}

	const handleClose = () => {
        setAnchorEl(null);
	};
	
	const RemovePlaylist = () => {
		setAnchorEl(null)
		setRemove(true);
	}

	return (
		<div>
			<div className="body__info">
				{/* <img src={discover_weekly?.images[0].url} alt="" /> */}
				<div className="body__infoText">
					<strong>PLAYLIST by {playlist?.owner?.username}</strong>
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
					playlist?.songs.map((song) => <SongRow search={false} song={song} playlist={playlist} setEdited={setEdited}/>)
				) : (
					<EmptyPlaylist />
				)}
			</div>
			<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={RemovePlaylist}>
						Delete playlist
					</MenuItem>
			</Menu>
			<DeletePlaylistDialog remove={remove} setRemove={setRemove} playlist={playlist} />
		</div>
	);
}

export default YourPlaylist;
