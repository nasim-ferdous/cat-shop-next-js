"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "admin@catshop.com" && password === "123456") {
      document.cookie = "auth=true; path=/";
      router.push("/items");
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Login to CatShop
        </h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="admin@catshop.com"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            name="password"
            type="password"
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="123456"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 cursor-pointer"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-500 mt-4">
          Demo Login → admin@catshop.com / 123456
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
