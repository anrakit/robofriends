import React from 'react';
import '../Components/RoboFriends.css';


const SearchBar = ({searchChange}) => {
    return (
        <div className="searchwrapper">
            <input 
            className ="inputbox"
            type="search" 
            placeholder="Search your Friends!"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBar;