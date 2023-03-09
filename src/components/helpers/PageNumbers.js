import React , { useContext } from 'react';
import GlobalContext from '../../context/context.js';

// If we have more than a few helpers, implement a helper interface

function PageNumbers() {
    const { page, setPage } = useContext(GlobalContext);

    // There is a hard-coded limit of 100 colors. There will be a maximum of 9 pages.
    const pageNumbers = [];
    for (let i = 1; i < 10; i++) {
        pageNumbers.push((
            <div key={"p-"+i} onClick={(() => setPage(i))}>
                {
                    page === i
                    ? (<p className="page-selected">{i}</p>)
                    : (<p>{i}</p>)
                }
            </div>
        ))
    }

    return (
        <div className="page-numbers">
            {pageNumbers}
        </div>
    )
}

export default PageNumbers;