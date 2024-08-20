import React from 'react'
type PropTypes={
    params:{
        name:string;
    }
}
export default function page({params}:PropTypes) {
  return (
    <div>
        <p>Company name:{params.name}</p>
    </div>
  )
}
