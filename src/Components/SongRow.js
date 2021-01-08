import { MoreHoriz } from '@material-ui/icons';
import React from 'react';
import { useStateProviderValue } from '../StateProvider';
import './SongRow.css';

function SongRow({song}) {
    const [, dispatch] = useStateProviderValue();

    const PlaySong = () => {
        dispatch({
            type: 'SET_SONG',
            song: song
        })
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
                <MoreHoriz/>
            </div>
        </div>
    )
}

export default SongRow
