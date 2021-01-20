
import React from 'react';
import './SongRow.css';


function AlbumSongRow({song}) {
    return (
        <div className="songRow">
            <div className="songRow__info">
                <h1>{song?.name}</h1>
                <p>
                    {song?.artists?.map((artist) => artist?.name).join(", ")}
                    {song?.isExplicit ? " - Explicit" : ""}
                </p>
                
            </div>
        </div>
    )
}

export default AlbumSongRow
