"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const RestaurantHeader = () => {
  const [restaurantInfo, setRestaurantInfo] = useState();
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    const info = localStorage.getItem("restaurantInfo");
    if (!info) {
      router.push("/restaurant");
    } else if (info && pathName == "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setRestaurantInfo(JSON.parse(info));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("restaurantInfo");
  };

  return (
    <div className="flex justify-between items-center mx-4 h-16">
      <div className="logo">
        <h4>Logo</h4>
      </div>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        {restaurantInfo && restaurantInfo.name ? (
          <>
            <li>
              <Link href="/">{restaurantInfo?.name}</Link>
            </li>
            <li>
              <Link href="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="">Login/SignUp</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantHeader;
