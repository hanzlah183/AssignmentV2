import React from "react";
import Pagination from "react-js-pagination";

const Paginaton = ({ ...props }) => {
  return (
    <Pagination
      prevPageText="prev"
      nextPageText="next"
      firstPageText="first"
      lastPageText="last"
      activePage={props.currentPage}
      itemsCountPerPage={props.itemsPerPage}
      totalItemsCount={props.name.length}
      pageRangeDisplayed={5}
      onChange={props.handlePageChange}
      itemClass="page-item"
      linkClass="page-link"
    />
  );
};

export default Paginaton;
