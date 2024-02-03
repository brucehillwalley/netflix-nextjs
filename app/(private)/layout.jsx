"use client";
//! ana layout client yapılamaz fakat içeridekiler yapılabilir. Böylece useEffect kulllanabiliriz.
//+ farklı private protect root yöntemleri var. Auth kütüphaneleri kullanılırsa nextauth, zeroauth  kendi protect yapıları vardır. Kendi içlerinde redirect kullanabiliriz.
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PrivateLayout = ({ children }) => {
  const { currentUser } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      router.replace("/login");
      //? replace history' deki bilgileri eklemez
    }
  }, [currentUser]);

  //! private içerisindeki tüm sayfaları kapsadığı için yukarıdaki user kontrolü layoutta yapıldı.

  return <div>{children}</div>;
};

export default PrivateLayout;
