import React , { useContext } from 'react';
import GlobalContext from '../../context/context.js';
import DATASTORE from '../../server/db.js';

// If we have more than a few helpers, implement a helper interface

function ListView() {
    const { page, setSelectedColor, search, setColorsIncluded } = useContext(GlobalContext);

    // There is a hard-coded limit of 100 colors. There will be a maximum of 9 pages.
    // There will be 12 colors per page.
    let start = (page-1) * 12; // 0, 96
    let end = (page * 12); // return 12 options
    if (end > 100) {
        end = 100;
    }

    let COLORS = DATASTORE.colors;

    // If search is not an empty string, change the dataset.
    if (search !== '') {
        COLORS = COLORS.filter(el => {
            // If the hex or the base includes the substring in search, return true
            if (el.hex.includes(search) ||
                el.base.includes(search)) {
                return true;
            }
            return false;
        })

        // TODO show appropriate number of pages based on colors included in search
    }

    const colors = COLORS.slice(start, end); // inclusive

    const listView = colors.map(el => {
        return (
            <div
                className="color"
                key={el.id} 
                onClick={() => setSelectedColor(el)}>
                <div
                    className="color-itself" 
                    style={{ backgroundColor: el.hex }} />
                <div className="color-label">
                    <div>
                        {el.hex}
                    </div>
                    <div>
                        {el.name}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="colors-container">
            {listView}
        </div>
    )
}

export default ListView;