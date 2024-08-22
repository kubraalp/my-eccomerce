import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-1/4 transform -translate-x-1/2  bg-white text-black px-4 py-2 text-center inline-block rounded-sm">
        <p className="text-xs font-bold">{product.type}</p>
      </div>
    </div>
  );
};

export default ProductCard;