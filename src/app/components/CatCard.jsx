import Link from 'next/link';
import React from 'react';

const CatCard = ({ cat }) => {
    return (
         <div className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={cat.image}
        alt={cat.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{cat.name}</h2>
        <p className="text-gray-600 text-sm mt-1">{cat.description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-orange-500">৳ {cat.price}</span>

          <Link
            href={`/items/${cat._id}`}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
    );
};

export default CatCard;