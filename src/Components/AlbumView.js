import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistService from "../Services/PlaylistService";
import "./YourPlaylist.css";
import AlbumSongRow from "./AlbumSongRow";

function AlbumView() {
    const [album, setAlbum] = useState();
    const [songs, setSongs] = useState();
	const [edited, setEdited] = useState();
	const { id } = useParams();

	useEffect(() => {
		PlaylistService.getAlbum(id).then((response) => {
			setAlbum(response);
        });
        PlaylistService.getAlbumSongs(id).then((response) => {
			setSongs(response);
		});
		setEdited(false);
	}, [id, edited]);

	return (
		<div>
			<div className="body__info">
				<img src={album?.images[0].url} alt="" />
				<div className="body__infoText">
					<strong>{album?.artists?.map((artist) => artist?.name).join(", ")} -{" "}</strong>
					<h2>{album?.name}</h2>
					<p>{album?.albumType}</p>
				</div>
			</div>

			<div className="body__songs">
				{songs?.length ? (
					songs?.map((song) => <AlbumSongRow search={false} song={song} setEdited={setEdited} spotify={true}/>)
				) : (
					<div>songs couldn't be loaded</div>
				)}
			</div>
		</div>
	);
}

export default AlbumView;
