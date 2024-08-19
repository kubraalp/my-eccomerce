import React from "react";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";



const HomePage = () => {
  const products = [
    { name: "Product 1", price: "$100", image: "image1.jpg" },
    { name: "Product 2", price: "$120", image: "image2.jpg" },
    // Diğer ürünler
  ];

  const images = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];

  return (
    <div>
      <Slider images={images} />
      <div className="grid grid-cols-1 gap-4 mt-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
