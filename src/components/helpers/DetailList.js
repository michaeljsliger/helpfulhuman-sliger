import React , { useContext } from 'react';
import GlobalContext from '../../context/context.js';
import DATASTORE from '../../server/db.js';

// If we have more than a few helpers, implement a helper interface

function DetailList() {
    const { selectedColor, setSelectedColor } = useContext(GlobalContext);
    
    // selectedColor will never be null here.
    const colors = DATASTORE.colors.filter(el => {
        return el.base === selectedColor.base && el.id !== selectedColor.id
    }); // inclusive

    let detailList = colors.map(el => {
        return (
            <div key={el.id} onClick={() => setSelectedColor(el)}>
                <div style={{ height: '30px', width: '30px', backgroundColor: el.hex }} />
                <div>
                    {el.hex}
                </div>
            </div>
        )
    })
    
    // Display a maximum of 5 colors, randomly selected
    if (detailList.length > 5) {
        const dl = []
        for (var i = 0; i < 5; i++) {
            const random = Math.floor(Math.random() * detailList.length)
            dl.push(detailList[random])
        }
        detailList = dl
    }

    return (
        <div>
            {detailList}
        </div>
    )
}

export default DetailList;