import React from "react";
import Track from './Track';
import playlistStyle from './playlist.module.css';

function Playlist(props){
    return (
        <div className={playlistStyle.container}>
            <div className={playlistStyle.topButtons}>
            <input 
                className={playlistStyle.playlistNameSetter}
                onChange={props.inputHandler}
                value={props.playlistName} 
                type='text' 
            />
            <button onClick={props.addToSpotify}>Add to Spotify</button>
            <button onClick={props.clearPlaylist}>Clear Playlist</button>
            </div>
            {props.playlist.length === 0 ? (
                <h1>Playlist is currently empty!</h1>
            ) : (
                props.playlist.map(result => (
                    <div className={playlistStyle.playlistItems}>
                      <div className={playlistStyle.trackContainer}>
                        <Track result={result} />
                      </div>
                      <i
                        onClick={() => props.deleteFromPlaylist(result.id)}
                        className={`${playlistStyle.deleteButton} fa-solid fa-x`}
                      ></i>
                    </div>
                  ))
                  
            )}
            
        </div>
    )
}

export default Playlist;