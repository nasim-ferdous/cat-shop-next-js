"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AddItemForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Your cat will be added to cart soon!");
    router.push("/items");
  };
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Cat</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        {/* {error && <p className="text-red-500 text-center">{error}</p>} */}

        <div className="grid md:grid-cols-2 gap-6">
          <input
            name="name"
            placeholder="Cat Name"
            required
            className="border px-4 py-2 rounded"
          />
          <input
            name="price"
            placeholder="Price"
            type="number"
            required
            className="border px-4 py-2 rounded"
          />
          <input
            name="age"
            placeholder="Age"
            required
            className="border px-4 py-2 rounded"
          />
          <input
            name="gender"
            placeholder="Gender"
            required
            className="border px-4 py-2 rounded"
          />
          <input
            name="breed"
            placeholder="Breed"
            required
            className="border px-4 py-2 rounded"
          />
          <input
            name="stock"
            placeholder="Stock"
            type="number"
            required
            className="border px-4 py-2 rounded"
          />
        </div>

        <input
          name="image"
          placeholder="Image URL"
          required
          className="border px-4 py-2 rounded w-full"
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          required
          className="border px-4 py-2 rounded w-full"
        />

        <button className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 cursor-pointer">
          Add Cat
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
