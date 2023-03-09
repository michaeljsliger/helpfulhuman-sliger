import React, { useContext } from 'react';
import GlobalContext from '../context/context.js';
import SVG from '../assets/svg';
import '../styles/header.css';

function Header() {
    const { search, setSearch } = useContext(GlobalContext)

    function handleChange(event) {
        setSearch(event.target.value);
    }

    return (
        <div className="header">
            <div className="header-left">
                <SVG />
            </div>
            {/* Search Bar */}
            <div className="header-right">
                <input 
                    type="text" 
                    placeholder="Search"
                    value={search}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Header;