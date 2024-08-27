'use client'
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [data, setData] = useState<any[]>([]); 
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/nonexistent-url")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => setError(error.message)); 
    }, []); 

    return (
        <div>
            <p>xử lý lỗi với ssr</p>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : data.length > 0 ? (
                data.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
