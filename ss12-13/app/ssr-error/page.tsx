'use client'
import { log } from 'console';
import React, { useEffect, useState } from 'react';

export default function page() {
    const [data, setData] = useState<any[]>([]); // Initialize state to store fetched data

    useEffect(() => {
     
        fetch("https://jsonplaceholder.typicode.com/nonexistent-url")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []); 
    return (
        <div>
            <p>xử lý lỗi với ssr</p>
            {data.length > 0 ? (
                data.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            ) : (
                <p>{data}</p>
            )}
        </div>
    );
}
