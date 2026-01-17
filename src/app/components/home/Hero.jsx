import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Find Your Perfect Feline Companion 🐱
          </h1>
          <p className="mt-4 text-gray-600">
            Discover healthy, adorable cats from trusted breeders. Bring joy and
            love into your home today.
          </p>
          <Link
            href="/items"
            className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Explore Cats
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1721466289028-0b6ec05aa771?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cat"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
