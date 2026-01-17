import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-orange-500">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Find Your Cat?</h2>
        <p className="mt-4">Browse our collection and adopt today.</p>
        <Link
          href="/items"
          className="inline-block mt-6 bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold"
        >
          View All Cats
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
