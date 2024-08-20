'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { POST } from "../api/user/route";

export default function Page() {

    const newuser = [
        {
          id: 1,
          name: "Alice Johnson",
          age: 28,
        },
        {
          id: 2,
          name: "Bob Smith",
          age: 34,
        },
        {
          id: 3,
          name: "Charlie Brown",
          age: 22,
        },
        {
          id: 4,
          name: "Diana Prince",
          age: 30,
        },
        {
          id:1111,
          name: "Edward Stark",
          age: 41,
        },
      ];
      
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user");
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <p>Danh sách User</p>
      {users.map((item: any) => (
        <div key={item.id}>
          <p>id: {item.id}</p>
          <p>name: {item.name}</p>
        </div>
      ))}
    </div>
  );
}

