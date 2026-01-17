import React from "react";

const FeaturedItems = () => {
  const cats = [
    {
      name: "Persian Cat",
      price: 15000,
      image:
        "https://images.unsplash.com/photo-1460572894071-bde5697f7197?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Bengal Cat",
      price: 18000,
      image:
        "https://images.unsplash.com/photo-1603277160434-df7471138363?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "British Shorthair",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1599582292739-d37615cc7882?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Cats</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cats.map((cat) => (
            <div key={cat.name} className="border rounded-xl p-4 shadow">
              <img
                src={cat.image}
                className="rounded-lg h-48 w-full object-cover"
              />
              <h3 className="mt-4 font-semibold text-lg">{cat.name}</h3>
              <p className="text-gray-600 mt-1">৳ {cat.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
