import React from 'react';
import './search.style.css';

export const Search=props=>(
    <input type="search"
    placeholder={props.placeholder}
    onChange={props.handleChange} 
    className="search-box"/>
)