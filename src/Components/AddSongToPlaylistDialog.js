import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Select,
    InputLabel,
    FormControl,
} from "@material-ui/core";
import React, { useState } from "react";
import PlaylistService from "../Services/PlaylistService";
import { useStateProviderValue } from "../StateProvider";
import "./AddSongToPlaylistDialog.css";

function AddSongToPlaylistDialog({ open, setOpen, song, setEdited }) {
	const [playlist, setPlaylist] = useState({});
    const [{ playlists }] = useStateProviderValue();
    
    console.log(playlist)

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (event) => {
        setPlaylist(event.target.value);
	};

	const handleAdd = () => {
		PlaylistService.addSongToPlaylist(song, playlist.id).then((response) => {
			console.log(response);
		});
		setOpen(false);
    };
    
	return (
		<Dialog open={open} onClose={handleClose} className="dialog">
			<DialogTitle>Add {song.name} to one of your playlists</DialogTitle>
			<DialogContent>
				<FormControl>
					<InputLabel htmlFor="age-native-simple">Playlist</InputLabel>
					<Select
						labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className="playlistselection"
						defaultValue="Please select a playlist..."
						onChange={handleChange}
					>
						{playlists?.map((item) => {
							return (
								<option value={item}>
									{item.name}
								</option>
							);
						})}
					</Select>
				</FormControl>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="secondary">
					Cancel
				</Button>
				<Button onClick={handleAdd} className="createButton">
					Add
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default AddSongToPlaylistDialog;
