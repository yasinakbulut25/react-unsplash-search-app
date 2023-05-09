import React from "react";

function Pagination({ page, totalPages, changePage }) {
  const changePageFunc = (value) => {
    if (value > 0 && value <= totalPages) {
      changePage(value);
    }
  };

  return (
    <div className="pagination">
      <p>
        Showing page {page}. out of {totalPages}
        {page === totalPages ? "(last page)" : ""}
        {page === 1 ? "(first page)" : ""}
      </p>
      <button onClick={changePageFunc.bind(this, page - 1)} type="button">
        Prev
      </button>
      <button onClick={changePageFunc.bind(this, page + 1)} type="button">
        Next
      </button>
    </div>
  );
}
export default Pagination;
