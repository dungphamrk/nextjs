"use client";
import React, { useEffect, useState } from "react";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);
  return data;
}
export default async function page() {
  const data = await getData();
  return (
        <div>
        <h1>danh sách sản phẩm </h1>
        {data.map((item: any) => (
            <>
            <h1>{item.category}</h1>
            <p>{item.price}</p>
            <img  src={item.image} alt="" />
            </>
        ))}
        </div>
  );
}
