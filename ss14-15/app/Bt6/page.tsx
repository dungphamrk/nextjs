import React from "react";
async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}
export default async function page() {
  const data = await getData();
  return (
    <div>
      <h1>danh sách sản phẩm </h1>
      {data.map((item: any) => (
        <>
          <h1>{item.name}</h1>
          <p>{item.address.city}</p>
          <p>{item.email}</p>
        </>
      ))}
    </div>
  );
}
