import Link from "next/link";
import React from "react";
import CatCard from "../components/CatCard";

const ItemsPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const data = await fetch(`${baseUrl}/api/cats`, { cache: "no-store" });

  const cats = await data.json();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Available Cats</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cats.map((cat) => (
          <CatCard key={cat._id} cat={cat}></CatCard>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
