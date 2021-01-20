import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import PlaylistService from "../Services/PlaylistService";
import { useStateProviderValue } from "../StateProvider";
import "./AddSongToPlaylistDialog.css";

function DeletePlaylistDialog({ remove, setRemove, playlist }) {
    const [, dispatch] = useStateProviderValue();
	const handleClose = () => {
		setRemove(false);
    };
    let history = useHistory();

	const handleRemove = () => {
		PlaylistService.deletePlaylist(playlist?.id).then((response) => {
			
		});
        setRemove(false);
        dispatch({
                type: 'SET_PLAYLISTEDITED',
                playlistEdited: true,
            })
        history.push("/home");
    };
    
	return (
		<Dialog open={remove} onClose={handleClose} className="dialog" PaperProps={{
			style: {
				backgroundColor: 'darkgray',
				color: 'white'
			}
		}}>
			<DialogTitle>Delete playlist {playlist?.name}?</DialogTitle>
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

export default DeletePlaylistDialog;
