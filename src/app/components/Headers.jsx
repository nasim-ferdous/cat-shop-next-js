import Link from "next/link";
import React from "react";

const Headers = () => {
  //       const [isAuth, setIsAuth] = useState(false);
  //   const router = useRouter();

  //   useEffect(() => {
  //     const auth = Cookies.get("auth");
  //     setIsAuth(!!auth);
  //   }, []);

  //   const handleLogout = () => {
  //     Cookies.remove("auth");
  //     setIsAuth(false);
  //     router.push("/login");
  //   };
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

          {/* {!isAuth ? (
            <Link
              href="/login"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                href="/add-item"
                className="hover:text-orange-600"
              >
                Add Item
              </Link>

              <button
                onClick={handleLogout}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                Logout
              </button>
            </>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Headers;
