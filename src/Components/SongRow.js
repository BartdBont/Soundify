import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import React, { useState } from 'react';
import AddSongToPlaylistDialog from './AddSongToPlaylistDialog';
import DelSongFromPlaylistDialog from './DelSongFromPlaylistDialog';
import './SongRow.css';


function SongRow({song, search, playlist, setEdited}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        if (!e) e = window.event;
        e.cancelBubble = true;
         if (e.stopPropagation) e.stopPropagation();
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const addToPlaylist = (e) => {
        setOpen(true);
        setAnchorEl(null);
    };
    
    const handleRemove = (e) => {
        setOpenRemove(true);
        setAnchorEl(null);
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
                    {!search && <MenuItem color="secondary" onClick={handleRemove}>
						Remove from this playlist
					</MenuItem>}
					
				</Menu>
                <AddSongToPlaylistDialog open={open} setOpen={setOpen} song={song}/>
                {!search && <DelSongFromPlaylistDialog openRemove={openRemove} setOpenRemove={setOpenRemove} song={song} playlist={playlist} setEdited={setEdited} />}
            </div>
        </div>
    )
}

export default SongRow
