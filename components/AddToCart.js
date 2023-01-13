"use client";

import React from "react";

const AddToCart = ({ name }) => {
  return (
    <button
      className="text-white bg-red-500   hover:bg-red-600 rounded py-1 px-3 mt-5 client"
      onClick={() => {
        alert(`Added ${name} to cart`);
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
