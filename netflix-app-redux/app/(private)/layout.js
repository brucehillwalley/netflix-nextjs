"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PrivateLayout({ children }) {
  const { currentUser } = useSelector((state) => state.auth);

  let router = useRouter();
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      router.push("/login");
    }
  }, [currentUser]);

  return <section>{children}</section>;
}
