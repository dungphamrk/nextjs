"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function BT8() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages =20;
    
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
    const renderPaginationButtons = () => {
        const pageButtons = [];
        const delta = 2; // Number of pages to display around the current page
    
        for (let i = 1; i <= totalPages; i++) {
          if (
            i === 1 ||
            i === totalPages ||
            (i >= currentPage - delta && i <= currentPage + delta)
          ) {
            pageButtons.push(
              <a
                key={i}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(i);
                }}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  currentPage === i
                    ? "bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                }`}
              >
                {i}
              </a>
            );
          } else if (
            i === currentPage - delta - 1 ||
            i === currentPage + delta + 1
          ) {
            pageButtons.push(
              <span
                key={i}
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
              >
                ...
              </span>
            );
          }
        }
    
        return pageButtons;
      };
  return (
    
    <div>
       
        <div className="flex justify-between p-3 bg-gray-200">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-700">
            Trang {currentPage} / {totalPages}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 text-gray-700"
            } px-3 py-2 rounded-l-md`}
          >
           <FontAwesomeIcon icon={faArrowLeft}className="w-5 h-5" />
          </button>
          {renderPaginationButtons()}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 text-gray-700"
            } px-3 py-2 rounded-r-md`}
          >
            <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
          </button>
        </div>
      </div>
        
    
    </div>
  )
}
