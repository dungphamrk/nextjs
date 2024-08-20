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
type ParamTypes={
    params:{
        id:number
    }
}
export async function GET(res: any, {params}:ParamTypes) {
    const result = user.find((item) => item.id === +params.id);
    return NextResponse.json({ data: result });
}
export async function PATCH(res: any, {params}:ParamTypes) {
    const data = await res.json();
    const {id}=params
    return NextResponse.json({ message:"cập nhập thành công", id:id,data:data });
}
export async function DELETE(res: any, {params}:ParamTypes) {
    const {id}=params
    return NextResponse.json({message:"Xóa thông tin thành công", id:id});
}
