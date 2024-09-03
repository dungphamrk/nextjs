"use client";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import "./globals.css";
import { useRouter } from "next/navigation";

function AuthActions() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/sign-in'); // Chuyển hướng đến trang đăng nhập sau khi đăng xuất
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <SignedOut>
        <SignInButton>
          <button className="bg-blue-950 p-2 rounded-xl text-white">Đăng nhập</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <button 
          onClick={handleSignOut} // Gọi hàm `handleSignOut`
          className="bg-blue-950 p-2 rounded-xl text-white"
        >
          Đăng xuất
        </button>
      </SignedIn>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <AuthActions />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
