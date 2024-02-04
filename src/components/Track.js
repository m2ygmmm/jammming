import React from 'react';
import trackStyle from './trackStyle.module.css';

const TrackResult = ({ result }) => {
  const albumArtIndex = 1;
  console.log(result)

  return (
    <div className={trackStyle.container}>
      <div>
      <img
        className={trackStyle.image}
        src={result.albumArt[albumArtIndex].url}
        alt={`${result.album} Album Art`}
        style={{
          height: result.albumArt[albumArtIndex].height -100,
          width: result.albumArt[albumArtIndex].width -100,
        }}
      />
      </div>
   
      <div>
        <h2>{result.name}</h2>
        <h2>{result.album}</h2>
        <h2>Author: {result.artist}</h2>
        <h4>
  {`${Math.floor(result.duration / 60000)} minutes and ${Math.floor((result.duration / 1000) % 60)} seconds`}
</h4>

      </div>
      
    </div>
  );
};

export default TrackResult;