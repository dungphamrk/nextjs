'use client'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function Example() {
  const { isLoaded, userId, sessionId, getToken } = useAuth()
  const route=useRouter();

  if (!isLoaded || !userId) {
    route.push("sign-in");
    return null
  }

  return (
    <div>
      Hello
    </div>
  )
}