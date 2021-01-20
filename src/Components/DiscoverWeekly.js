import React, { useEffect, useState } from 'react'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlaylistService from '../Services/PlaylistService';
import AlbumRow from './AlbumRow';

function DiscoverWeekly() {
    const [albums, setAlbums] = useState();

    useEffect(() => {
        PlaylistService.getRecentAlbums().then((response) => {
            setAlbums(response);
        })
    }, [])
    
    return (
        <div>
            <div className="body__info">
                {/* <img src={discover_weekly?.images[0].url} alt="" /> */}
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p></p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"/>
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon/>
                </div>

                {albums?.length ? (
					albums?.map((album) => <AlbumRow album={album}/>)
				) : (
					<div>empty</div>
				)}
            </div>
        </div>
    )
}

export default DiscoverWeekly
