import axios from "axios";
import React from "react";
  async function getData() {
    const  res = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    )
    return res.data;
  }
export default async function page() {
    const data= await getData();
        console.log("nhiệt độ", data.current.temperature_2m);
        console.log("tốc độ gió",    data.current.wind_speed_10m);
 
    
  return <div>
    <p>nhiệt độ { data.current.temperature_2m} </p>
    <p>tốc độ gió{   data.current.wind_speed_10m}</p>
  </div>;
}
