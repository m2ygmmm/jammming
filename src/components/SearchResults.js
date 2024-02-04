import React from 'react';
import Track from './Track'; // Adjust the path to match the actual location of your TrackResult component
import searchResultsStyle from './SearchResults.module.css';

export default function SearchResults(props) {
  return (
    <div className={searchResultsStyle.container}>
  <ul>
  {props.searchResults.length === 0 ? (
    <h1>Results will appear here</h1>
  ) : (
    props.searchResults.map(result => (
      <li key={result.id}>
        <Track result={result} />
        <i class="fa-solid fa-plus" onClick={() => props.updatePlaylist({ result: result })}></i>
      </li>
    )))}
  </ul>
</div>

  );
}
