import React , { useContext } from 'react';
import GlobalContext from '../context/context.js';
import PageNumbers from './helpers/PageNumbers.js';
import ListView from './helpers/ListView';
import DetailList from './helpers/DetailList.js';
// Render List or Detail View

function Content() {
    const { 
        selectedColor, setSelectedColor,
        page, setPage
    } = useContext(GlobalContext);

    if (selectedColor == null) {
        // If selectedColor context is null, display list view
        // List view shows 12 colors per page.
        
        return (
            <div>
                <ListView />
                <PageNumbers />
            </div>
        )
    }

    // Otherwise display detail view
    const el = selectedColor
    return (
        <div>
            <button onClick={() => setSelectedColor(null)}>
                Back
            </button>
            <div key={el.id}>
                <div style={{ height: '250px', width: '250px', backgroundColor: el.hex }} />
                <div>
                    {el.hex}
                </div>
            </div>
            <DetailList />
        </div>
    )
}

export default Content