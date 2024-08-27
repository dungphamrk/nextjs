'use client'
import React, { useEffect, useState } from "react";
export default function page() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <h1> list of posts</h1>
      {data.length > 0 ? (
        data.map((item) => <p> {item.body}</p>)
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
