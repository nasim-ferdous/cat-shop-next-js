"use client";
import Cookies from "js-cookie";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Headers = () => {
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState(() => !!Cookies.get("auth"));
  const router = useRouter();
  useEffect(() => {
    const checkAuth = () => {
      const auth = Cookies.get("auth");
      setIsAuth(Boolean(auth));
    };

    checkAuth();
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove("auth");
    setIsAuth(false);
    router.push("/login");
  };
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-600">
          🐱 CatShop
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-orange-600">
            Home
          </Link>

          <Link href="/items" className="hover:text-orange-600">
            Items
          </Link>

          {!isAuth ? (
            <Link
              href="/login"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer"
            >
              Login
            </Link>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Headers;
