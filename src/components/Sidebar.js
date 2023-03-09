import React, { useContext } from 'react';
import GlobalContext from '../context/context.js';
import DATASTORE from '../server/db';

function Sidebar() {
    const {selectRandomColor} = useContext(GlobalContext)

    function renderBaseColorsList() {
        return DATASTORE.baseColors.map((el, i) => {
            // TODO Navigate to first instance of the color
            return (
                <div key={i}>
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
        selectRandomColor(color)
    }

    return (
        <div>
            { /* TODO change */ }
            <button onClick={() => randomColor()}>
                Random Color
            </button>
            {renderBaseColorsList()}
            <p>
                SIDEBAR
            </p>
        </div>
    )
}

export default Sidebar;