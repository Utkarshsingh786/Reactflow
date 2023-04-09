import React from "react";
import Pagination from '@mui/material/Pagination';
const CustomPagination = ({ setPage, numOfPages = 20 }) => {
    // Scroll to top when page changes
    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                position: "relative",
                top: "45%",

            }}
        >
            <Pagination
                onChange={(e) => handlePageChange(e.target.textContent)}
                count={numOfPages}
                color="primary"
                hideNextButton
                hidePrevButton
            />
        </div>
    );
}
export default CustomPagination;