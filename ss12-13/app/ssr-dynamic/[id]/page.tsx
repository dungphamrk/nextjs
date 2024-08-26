import React, { useEffect, useState } from 'react'
type PropTypes={
    params:{
        id:string;
    }
}
export default function page({params}:PropTypes) {
    const [data, setData] = useState<any[]>([]); // Initialize state to store fetched data

    useEffect(() => {
     
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []); 
    
  return (
    <div>
    <h1>Chi tiết bài viết</h1>
    {data.length > 0 ? (
        data
            .filter(post => post.id === params.id) 
            .map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))
    ) : (
        <p>Loading...</p>
    )}
</div>
  )
}
