import React , { useContext } from 'react';
import GlobalContext from '../context/context.js';
import PageNumbers from './helpers/PageNumbers.js';
import ListView from './helpers/ListView';
import DetailList from './helpers/DetailList.js';
import '../styles/content.css';
// Render List or Detail View

function Content() {
    const { 
        selectedColor, setSelectedColor,
        page, setPage,
    } = useContext(GlobalContext);

    if (selectedColor == null) {
        // If selectedColor context is null, display list view
        // List view shows 12 colors per page.
        
        return (
            <div className="content right">
                <ListView />
                <PageNumbers />
            </div>
        )
    }

    // Otherwise display detail view
    const el = selectedColor
    return (
        <div className="content right">
            <button onClick={() => setSelectedColor(null)}>
                Back
            </button>
            <div
                className="detail-color-container" 
                key={el.id}>
                <div
                    className="detail-color" 
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
            <DetailList />
        </div>
    )
}

export default Content