export const generatePageNumbers = (totalPages, currentPage) => {
    const numbers = [];
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage <= 0) {
        endPage -= (startPage - 1);
        startPage = 1;
    }

    if (endPage > totalPages) {
        endPage = totalPages;
        if (endPage > 5) {
            startPage = endPage - 4;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        numbers.push(i);
    }

    if (startPage > 100) {
        numbers.unshift('...');
        numbers.unshift(1);
    }

    if (endPage < totalPages) {
        numbers.push('...');
        numbers.push(totalPages);
    }

    return numbers;
}
