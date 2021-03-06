import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
} from "@material-ui/core";
import React from "react";
import PlaylistService from "../Services/PlaylistService";
import "./AddSongToPlaylistDialog.css";

function DelSongFromPlaylistDialog({ openRemove, setOpenRemove, song, playlist, setEdited }) {
	const handleClose = () => {
		setOpenRemove(false);
	};

	const handleRemove = () => {
        console.log(song)
		PlaylistService.removeSongFromPlaylist(song, playlist.id).then((response) => {
			console.log(response);
		});
		setOpenRemove(false);
		setEdited(true);
    };
    
	return (
		<Dialog open={openRemove} onClose={handleClose} className="dialog" PaperProps={{
			style: {
				backgroundColor: 'darkgray',
				color: 'white'
			}
		}}>
			<DialogTitle>Delete {song.name} from this playlist?</DialogTitle>
			<DialogActions>
				<Button onClick={handleClose}>
					Cancel
				</Button>
				<Button onClick={handleRemove} className="createButton" color="secondary">
					Remove
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DelSongFromPlaylistDialog;
