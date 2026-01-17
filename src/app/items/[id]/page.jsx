import Link from "next/link";
import React from "react";

const ItemDetailPage = async ({ params }) => {
  const { id } = await params;
  const data = await fetch(`http://localhost:3000/api/cats?id=${id}`);
  const cat = await data.json();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <img
          src={cat.image}
          alt={cat.name}
          className="rounded-xl shadow-lg w-full h-[400px] object-cover"
        />

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold">{cat.name}</h1>
          <p className="text-orange-500 text-2xl font-semibold mt-2">
            ৳ {cat.price}
          </p>

          <p className="mt-4 text-gray-600">{cat.description}</p>

          <div className="mt-6 space-y-2">
            <p>
              <strong>Breed:</strong> {cat.breed}
            </p>
            <p>
              <strong>Age:</strong> {cat.age}
            </p>
            <p>
              <strong>Gender:</strong> {cat.gender}
            </p>
            <p>
              <strong>Stock:</strong> {cat.stock} available
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Link
              href="/items"
              className="bg-gray-200 px-6 py-3 rounded hover:bg-gray-300 cursor-pointer"
            >
              Back to Items
            </Link>

            <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 cursor-pointer">
              Adopt Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
