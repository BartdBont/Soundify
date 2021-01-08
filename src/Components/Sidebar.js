import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateProviderValue } from '../StateProvider';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import AddPlaylistDialog from './AddPlaylistDialog';
import PlaylistService from '../Services/PlaylistService';

function Sidebar() {
    let history = useHistory();
    const [{playlists}, dispatch] = useStateProviderValue();
    const [open, setOpen] = useState(false);
    const [playlistss, setPlaylistss] = useState();
    const [edited, setEdited] = useState(false);

    const handleClick = () => {
        history.push("/");
    }

    const handleAddPlaylist = () => {
        setOpen(true);
    }

    const getAllPlaylists = () => {
        PlaylistService.getPlaylists()
        .then((response) => {
            setPlaylistss(response);
        });
    }

    useEffect(() => {
        getAllPlaylists();
        setEdited(false);
    }, [edited])

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://i.imgur.com/dT8rSvy.png" alt="" onClick={handleClick}/>
            <SidebarOption Icon={HomeIcon} title="Home" linkto="/"/>
            <SidebarOption Icon={SearchIcon} title="Search" linkto="/search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" linkto="/your_library"/>

            <br />
            <div className="playlist">
            <strong className="sidebar__title">PLAYLISTS</strong>
            <AddIcon className="addIcon" fontSize="small" onClick={handleAddPlaylist}/>
            </div>
            <AddPlaylistDialog open={open} setOpen={setOpen} setEdited={setEdited}/>
            <hr />
            
            {playlistss?.map((playlist, id) => (
                <SidebarOption playlist={playlist} title={playlist.name} linkto="/your_playlist" key={id}/>
            ))}
        </div>
    )
}

export default Sidebar
