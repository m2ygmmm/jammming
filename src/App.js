import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';
import appStyle from './components/app.module.css';
import SearchResults from './components/SearchResults.js';
import React, { useState, useEffect } from 'react';
import Spotify from './components/Spotify';
import Playlist from './components/Playlist.js';

function App() {

  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, addToPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('Playlist name')

  useEffect(() => {
    Spotify.search(input)
        .then(results => {
            setSearchResults(results)
            
        })
    .catch(error => console.log('ERROR: ', error))
},[input])


  const updatePlaylist = ({result}) => {
    if(!playlist.includes(result)){
      addToPlaylist((prevTest) => [result, ...prevTest]);
    }else{
      alert(`${result.name} is already added!`)
    }

  };

useEffect(() => {
  console.log(playlist);
}, [playlist]); 

    const handleInputChange = ({ target }) => {
        setInput(target.value);
    };

    function addToSpotify(){
      const trackUris = playlist.map((track) => track.uri )
      Spotify.savePlaylist(playlistName, trackUris).then(() =>{
        setPlaylistName('Playlist name')
        addToPlaylist([])
      })
      console.log('done')
      
    }

    const deleteFromPlaylist = (id) => {
      addToPlaylist(oldList => {
        return oldList.filter(playlist => playlist.id !== id)
      })
    }
  
    const setNewPlaylistName = ({target}) => {
      setPlaylistName(target.value)
      console.log(playlistName)
    };


  return (
    <div className={appStyle.gridParent}>
      <div>
      <SearchBar onSearch={handleInputChange} input={input}/>
      </div>
      <div>

      </div>
      <div>
        <SearchResults search={input} searchResults={searchResults} updatePlaylist={updatePlaylist}/>
      </div>
      <div>
      <Playlist 
        playlist={playlist}
        playlistName={playlistName} 
        inputHandler={setNewPlaylistName}
        addToSpotify={addToSpotify}
        deleteFromPlaylist={deleteFromPlaylist}
        clearPlaylist={() => addToPlaylist([])}
        />
      </div>
    </div>
  );
}

export default App;
