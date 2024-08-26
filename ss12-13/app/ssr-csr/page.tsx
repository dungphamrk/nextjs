'use client'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [data, setData] = useState<any[]>([]); // Initialize state to store fetched data
    let  [count, setCount]=useState(0);
    useEffect(() => {
     
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
          
    }, [count]); 
    
  return (
    <div>
    <button onClick={()=>setCount(count+1)}>Refresh</button>
    <h1>Danh sách người dùngt</h1>
    {data.length > 0 ? (
        data
            .map(post => (
                <ol key={post.id}>
                    <li>{post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body}</li>
                </ol>
            ))
    ) : (
        <p>Loading...</p>
    )}
</div>
  )
}
