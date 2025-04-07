"use client";

import Image from "next/image";
import Link from "next/link";
import MainLayout from "./components/layout.jsx";

export default function Home() {
  return (
    <MainLayout>
      {/* Main Page Content */}
      <div className="flex items-center justify-start h-screen px-10 relative z-10">
        <div className="flex flex-col justify-center items-start text-left space-y-8 max-w-md">
          <h1 className="text-6xl font-extrabold">Fit Check</h1>
          <div className="space-x-6">
            <Link href="/login">
              <button className="bg-zinc-700 px-6 py-3 text-lg rounded-lg hover:bg-zinc-600 transition">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-zinc-700 px-6 py-3 text-lg rounded-lg hover:bg-zinc-600 transition">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Shirt Image */}
      <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full">
        <Image
          src="/shirt.png"
          alt="Black Shirt"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </MainLayout>
  );
}
