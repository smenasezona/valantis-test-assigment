import {useCallback, useEffect, useState} from 'react';
import styles from './Pagination.module.scss'
import {generatePageNumbers} from "../../utils/pagination.js";

const Pagination = ({totalPages, currentPage, onPageChange}) => {
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        setPageNumbers(generatePageNumbers(totalPages, currentPage));
    }, [totalPages, currentPage]);

    const handlePrevious = useCallback(() => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }, [currentPage, onPageChange]);

    const handleNext = useCallback(() => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }, [currentPage, totalPages, onPageChange]);

    return (
        <span className={styles.pagination}>
            <button className={styles.arrow} onClick={handlePrevious} disabled={currentPage === 1}>
                &lt;
            </button>
            {pageNumbers.map(number => (
                <div key={number} onClick={() => number !== '...' && onPageChange(number)}
                     className={`${styles.page_number} ${currentPage === number ? styles.active : ''}`}>
                    {number}
                </div>
            ))}
            <button className={styles.arrow} onClick={handleNext} disabled={currentPage === totalPages}>
                &gt;
            </button>
        </span>
    );
};

export default Pagination;
