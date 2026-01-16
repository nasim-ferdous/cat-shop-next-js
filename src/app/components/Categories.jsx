import React from "react";

const Categories = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Cat Categories</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Persian", "Bengal", "British Shorthair", "Siamese"].map((cat) => (
            <div key={cat} className="bg-orange-100 p-6 rounded-xl text-center">
              <h3 className="font-semibold">{cat}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
