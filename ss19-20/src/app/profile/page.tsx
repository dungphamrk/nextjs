import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function page() {
    const user =await currentUser();
    console.log(user);
    
  return (
    <div>
        <p>Họ và tên:{user?.fullName}</p>
        <p>Email: {user?.emailAddresses[0].emailAddress} </p>
    </div>
  )
}
