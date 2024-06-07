import { ArrowLeft } from "lucide";
import React from "react";

const Pagination = ({ pages, currentPage, onPageChange }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-base gap-3 h-10 items-center">
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="flex items-center justify-center leading-tight  text-gray-500  hover:text-white cursor-pointer"
          >
           <ArrowLeft /> Previous
          </button>
        </li>
        {pages.map((page, index) => (
          <li key={index}>
            <button
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center px-4 h-10 w-10 leading-tight rounded-full ${
                currentPage === page
                  ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === pages.length}
            onClick={() => onPageChange(currentPage + 1)}
            className="flex items-center justify-center leading-tight  text-gray-500  hover:text-white cursor-pointer"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
