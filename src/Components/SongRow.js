import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import React, { useState } from 'react';
import { useStateProviderValue } from '../StateProvider';
import AddSongToPlaylistDialog from './AddSongToPlaylistDialog';
import './SongRow.css';

function SongRow({song}) {
    const [, dispatch] = useStateProviderValue();
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        if (!e) var e = window.event;
        e.cancelBubble = true;
         if (e.stopPropagation) e.stopPropagation();
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const addToPlaylist = (e) => {
        setOpen(true);
	};

    const PlaySong = () => {
        // dispatch({
        //     type: 'SET_SONG',
        //     song: song
        // })
    }

    return (
        <div className="songRow" onClick={() => PlaySong()}>
            <img className="songRow__album" src={song?.album?.image} alt="" />
            <div className="songRow__info">
                <h1>{song?.name}</h1>
                <p>
                    {song?.artist?.map((artist) => artist?.name).join(", ")} -{" "}
                    {song?.album?.name}
                </p>
                
            </div>
            <div className="songRow__options">
            <IconButton
					className="more_options"
					onClick={handleClick}
				>
					<MoreHoriz className="morehoriz" />
			</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={addToPlaylist}>
						Add to Playlist...
					</MenuItem>
					<MenuItem >
						View Album
					</MenuItem>
					<MenuItem color="secondary">
						Remove from this playlist
					</MenuItem>
				</Menu>
                <AddSongToPlaylistDialog open={open} setOpen={setOpen} song={song}/>
            </div>
        </div>
    )
}

export default SongRow
