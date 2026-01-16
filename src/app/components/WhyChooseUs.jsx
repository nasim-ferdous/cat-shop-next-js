import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose CatShop?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold">Healthy Cats</h3>
            <p className="text-gray-600 mt-2">
              Vet-checked and well cared for cats.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Trusted Sellers</h3>
            <p className="text-gray-600 mt-2">
              Verified breeders with good reputation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Safe Delivery</h3>
            <p className="text-gray-600 mt-2">
              Secure and humane transportation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
