import { NextResponse } from "next/server";
const user = [
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
    id: 5,
    name: "Edward Stark",
    age: 41,
  },
];

export async function GET(res: any, req: any) {

  return NextResponse.json({ data: user });
}

export async function POST(res: any) { 
    const data =await res.json();
    return NextResponse.json({ data });
}