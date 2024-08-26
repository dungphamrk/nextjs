'use client'
import { log } from 'console';
import React, { useEffect, useState } from 'react';

export default function BT1() {
    const [data, setData] = useState<any[]>([]); // Initialize state to store fetched data

    useEffect(() => {
     
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []); 
    console.log(data);
    
    return (
        <div>
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
        </div>
    );
}
