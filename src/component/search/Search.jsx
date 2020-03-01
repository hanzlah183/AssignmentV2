import React, { useState } from "react";
import List from "../list-item/ListItem";

import Paginaton from "../pagination/pagination";

const Search = ({ animal: { name, loading } }) => {
  const [state, setState] = useState({ search: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleChange = e => {
    setState({ search: e.target.value });
    setCurrentPage(1);
  };

  let filtered = name.filter(item =>
    item.toLowerCase().includes(state.search.toLowerCase())
  );

  const indexOfLastitem = currentPage * itemsPerPage;
  const indexOfFirstitem = indexOfLastitem - itemsPerPage;
  const paginated = filtered.slice(indexOfFirstitem, indexOfLastitem);

  return (
    <div className="container mt-5">
      <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
        <input
          className="form-control form-control-sm ml-3 w-75 text-justify"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </form>
      {state.search.length > 0 ? (
        <h3 className="text-text-info mt-4 text-right">
          Search Result:{paginated.length}
        </h3>
      ) : (
        <h3 className="text-text-info mt-4 text-left">
          Total Result:{name.length}
        </h3>
      )}

      {loading ? <h3>Loading...</h3> : <List result={paginated} />}
      <Paginaton
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        name={name}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Search;
