import React, { useState } from 'react';
import SearchBarStyle from './searchBar.module.css';

export default function SearchBar(props) {
    
    return (
        <div className={SearchBarStyle.container}>
            <input
                className={SearchBarStyle.searchBox}
                onChange={props.onSearch}
                value={props.input}
                type='text'
                placeholder='Search'
            />
            <h1>Searching for {props.input}...</h1>
        </div>
    );
}
