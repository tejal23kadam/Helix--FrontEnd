import React from 'react'
import { useState, useEffect } from 'react';


const Pagination = ({ length, postsPerPage, currentPage, handlePagination }) => {
    let paginationNumber = []
    const pageNumberLimit = 5;
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumber.push(i);
    }
    const renderPageNumbers = paginationNumber.map((pageNumber) => {
        if (pageNumber < maxPageNumberLimit + 1 && pageNumber > minPageNumberLimit) {
            return (
                <button  key={pageNumber}
                    className={currentPage === pageNumber ? 'active-page btn-warning' : ''}
                    onClick={() => handlePagination(pageNumber)}>
                    {pageNumber}
                </button>);
        } else {
            return null;
        }
    });
   

    const handleNextbtn = () => {
        handlePagination(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        handlePagination(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };
    return (

        <div className="pagination1">
            <div className="pages">
                <button style={{ display: (renderPageNumbers.length > 0 ) ? 'block' : 'none' }} onClick={handlePrevbtn} disabled={currentPage === paginationNumber[0] ? true : false}>
                    <i className="bi bi-chevron-left"></i>
                </button>
                {/* Render page numbers if they exist */}
                <div className="page-number">
                    {renderPageNumbers.length > 0 ? renderPageNumbers : <h1>No Results</h1>}
                </div>
                <button style={{ display:(renderPageNumbers.length > 0 ) ? 'block' : 'none' }} onClick={handleNextbtn} disabled={currentPage === paginationNumber.length ? true : false}>
                    <i className="bi-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}
export default Pagination