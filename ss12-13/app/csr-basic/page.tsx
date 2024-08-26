'use client'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [data, setData] = useState<any[]>([]); // Initialize state to store fetched data

    useEffect(() => {
     
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []); 
    
  return (
    <div>
    <h1>Danh sách người dùngt</h1>
    {data.length > 0 ? (
        data
            .map(user => (
                <ol key={user.id}>
                    <li>{user.username  }</li>
                </ol>
            ))
    ) : (
        <p>Loading...</p>
    )}
</div>
  )
}
