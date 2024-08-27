'use client'
import React, { useState, useEffect } from 'react';

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setFilteredData(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const applyFilter = () => {
      const filtered = data.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
      setFilteredData(filtered);
    };

    applyFilter();
  }, [minPrice, maxPrice, data]);

  return (
    <div>
      <div className="filter-container">
        <select onChange={(e) => setMinPrice(Number(e.target.value))} value={minPrice}>
          <option value="0">Min Price</option>
          <option value="10">10$</option>
          <option value="20">20$</option>
          <option value="30">30$</option>
        </select>

        <select onChange={(e) => setMaxPrice(Number(e.target.value))} value={maxPrice}>
          <option value="100">Max Price</option>
          <option value="40">40$</option>
          <option value="60">60$</option>
          <option value="80">80$</option>
        </select>


      </div>

      <h1>Danh sách sản phẩm</h1>
      <div className="flex flex-wrap gap-5">
        {filteredData.length > 0 ? (
          filteredData.map((item: any) => (
            <div key={item.id} className="product-item">
              <h2>Name: {item.title}</h2>
              <p>Price: {item.price}$</p>
              <img className="h-20" src={item.image} alt={item.title} />
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
