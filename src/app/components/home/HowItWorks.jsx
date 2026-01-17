import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-lg">Browse Cats</h3>
            <p className="text-gray-600 mt-2">Explore available cats easily.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Choose One</h3>
            <p className="text-gray-600 mt-2">Pick your favorite companion.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Adopt & Enjoy</h3>
            <p className="text-gray-600 mt-2">
              Complete adoption and bring joy home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
