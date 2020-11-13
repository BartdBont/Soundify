import React from 'react';
import './SongRow.css';

function SongRow({song}) {
    return (
        <div className="songRow">
            <img className="songRow__album" src={song?.album?.image} alt="" />
            <div className="songRow__info">
                <h1>{song?.name}</h1>
                <p>
                    {song?.artist?.map((artist) => artist?.name).join(", ")} -{" "}
                    {song?.album?.name}
                </p>
                
            </div>
        </div>
    )
}

export default SongRow
