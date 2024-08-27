'use client'
import { log } from 'console';
import React, { useEffect, useState } from 'react';

export default function page() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages =20;
    
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
    const [data, setData] = useState<any[]>([]); 
    useEffect(() => {
     
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []); 
    console.log(data);
    return (
        <div>
            <b>Phân Trang với CSR</b>
            {data.length > 0 ? (
                data.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
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
          pre
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 text-gray-700"
            } px-3 py-2 rounded-r-md`}
          >
            next
          </button>
        </div>
      </div>


        </div>
    );
}
