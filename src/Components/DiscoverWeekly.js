import React from 'react'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function DiscoverWeekly() {
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

                {/* {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))} */}
                {/* {console.log(discover_weekly?.tracks.items)} */}
            </div>
        </div>
    )
}

export default DiscoverWeekly
