"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
//? app folder içindeki page.js "/" route olan home sayfasıdır

//? nextjs'de tüm componentler default olarak server componenttir. client component kullanmak için "use-client" direktifini kullanmamız gerekir

export default function Home() {
  const { currentUser } = useSelector((state) => state.auth);
  let router = useRouter();
  useEffect(() => {
    currentUser && router.push("/profile");
  }, [currentUser]);

  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <div className="text-white text-center relative top-2/4 m-auto">
          <h1 className="text-5xl font-[900] text-center mb-3">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-2xl font-[400] ">
            Watch anywhere. Cancel anytime.
          </p>
          {/* //? next/link arka planda sayfayı önceden fetch edilir. Bu, client tarafı gezintilerin performansını iyileştirmek için kullanışlıdır. Görünüm alanındaki herhangi bir <Link />  önceden yüklenecektir. */}
          <Link href="/register">
            <button
              className="btn-danger w-[250px]"
              // onClick={() => router.push("/register")}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
