import React from 'react';
import { useHistory } from 'react-router-dom';
import './SongRow.css';


function AlbumRow({album}) {
    let history = useHistory();
    const viewAlbum = () => {
        history.push(`album/${album.id}`)
    }

    return (
        <div className="songRow" onClick={viewAlbum}>
            <img className="songRow__album" src={album?.images[0].url} alt="" />
            <div className="songRow__info">
                <h1>{album?.name}</h1>
                <p>
                    {album?.artists?.map((artist) => artist?.name).join(", ")} -{" "}
                    {album?.albumType}
                </p>
                
            </div>
        </div>
    )
}

export default AlbumRow
