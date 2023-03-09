import React , { useContext } from 'react';
import GlobalContext from '../../context/context.js';
import DATASTORE from '../../server/db.js';

// If we have more than a few helpers, implement a helper interface

function ListView() {
    const { page, setSelectedColor } = useContext(GlobalContext);

    // There is a hard-coded limit of 100 colors. There will be a maximum of 9 pages.
    // There will be 12 colors per page.
    let start = (page-1) * 12; // 0, 96
    let end = (page * 12); // return 12 options
    if (end > 100) {
        end = 100;
    }
    const colors = DATASTORE.colors.slice(start, end); // inclusive

    const listView = colors.map(el => {
        return (
            <div key={el.id} onClick={() => setSelectedColor(el)}>
                <div style={{ height: '30px', width: '30px', backgroundColor: el.hex }} />
                <div>
                    {el.hex}
                    {el.name}
                </div>
            </div>
        )
    })

    return (
        <div>
            {listView}
        </div>
    )
}

export default ListView;