import React, { useState } from "react"

type PaginationProps = {
  itemsPerPage: number
  totalItems: number
  paginate: (pageNumber: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    paginate(pageNumber)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item${currentPage === pageNumber ? " active" : ""}`}
          >
            <button
              onClick={() => handlePageClick(pageNumber)}
              className="page-link"
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
