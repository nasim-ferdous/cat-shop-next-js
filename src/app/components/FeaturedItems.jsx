import React from "react";

const FeaturedItems = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Cats</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-xl p-4 shadow">
              <img
                src={`https://placekitten.com/300/30${i}`}
                className="rounded-lg h-48 w-full object-cover"
              />
              <h3 className="mt-4 font-semibold text-lg">Cute Cat #{i}</h3>
              <p className="text-gray-600 mt-1">৳ 12,000</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
