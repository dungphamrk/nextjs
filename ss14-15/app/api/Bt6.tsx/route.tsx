export default async function GET(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
}