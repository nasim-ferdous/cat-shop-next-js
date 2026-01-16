import React from "react";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Happy Customers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Ayesha", "Rahim", "Nabila"].map((name) => (
            <div key={name} className="border p-6 rounded-xl shadow">
              <p className="text-gray-600">
                “Amazing service and very healthy cats!”
              </p>
              <h4 className="mt-4 font-semibold">{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
