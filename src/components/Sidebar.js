import React, { useContext } from 'react';
import GlobalContext from '../context/context.js';
import DATASTORE from '../server/db';
import '../styles/sidebar.css';

function Sidebar() {
    const {setSelectedColor, setSearch} = useContext(GlobalContext)

    function renderBaseColorsList() {
        return DATASTORE.baseColors.map((el, i) => {
            return (
                <div
                    onClick={() => setSearch(el.toLowerCase())} 
                    key={i}>
                    <button>
                        {el}
                    </button>
                </div>
            )
        })
    }
    
    const randomColor = () => {
        const id = Math.floor(Math.random() * DATASTORE.colors.length)
        const color = DATASTORE.colors[id]
        setSelectedColor(color)
    }

    return (
        <div className="sidebar left">
            { /* TODO change */ }
            <button onClick={() => randomColor()}>
                Random Color
            </button>
            {renderBaseColorsList()}
        </div>
    )
}

export default Sidebar;