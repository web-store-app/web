import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

interface PaginateProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
}

const Paginate: React.FC<PaginateProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <Pagination>
            {currentPage > 1 && <Pagination.Prev onClick={prevPage} />}
            {Array.from({ length: totalPages }).map((_, index) => (
                <Pagination.Item
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </Pagination.Item>
            ))}
            {currentPage < totalPages && <Pagination.Next onClick={nextPage} />}
        </Pagination>
    );
};

export default Paginate;
