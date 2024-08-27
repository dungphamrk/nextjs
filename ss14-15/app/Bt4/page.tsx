import axios from "axios";
import React from "react";

async function getData() {
  try {
    const res = await axios.get("https://example.com/invalid-endpoint");
    return res.data;
  } catch (error: any) {
    return { error: error.response?.status };
  }
}

export default async function Page() {
  const data = await getData();
  console.log(data);

  return (
    <div>
      {data.error ? (
        <p>
          {data.error === 500 ? (
            <h1>500 - Lỗi máy chủ</h1>
          ) : (
            <h1>404 - Trang không tồn tại</h1>
          )}
        </p>
      ) : (
        <p>Không có lỗi xảy ra.</p>
      )}
    </div>
  );
}
