import React, { useEffect, useState } from "react";
import Badge from "./Badge";
import Heading from "./Heading";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="w-[24%] relative group">
          <img src={product.image} alt={product.title} />
          <Badge badgeText={"New"} className={"absolute top-5 left-5"} />
          <div className="py-[20px] flex justify-between">
            <Heading text={product.title} as={"h3"} />
            <Heading text={`$${product.price}`} as={"p"} />
          </div>
          <div className="bg-productH p-[28px] absolute bottom-[64px] left-0 w-full hidden group-hover:block transition duration-300 delay-300">
            <div className="flex justify-end items-center gap-x-2">
              <span>Add to Wish List </span>
              <FaHeart />
            </div>
            <div className="flex justify-end items-center gap-x-2">
              <span>Compare </span>
              <FaCodeCompare />
            </div>
            <div className="flex justify-end items-center gap-x-2">
              <span>Add to Cart </span>
              <FaShoppingCart />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
