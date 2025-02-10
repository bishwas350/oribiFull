import React, { useEffect, useState } from "react";
import Badge from "./Badge";
import Heading from "./Heading";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);

  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center">
      {currentProducts.map((product) => (
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
      </div>
      <div className="flex justify-center mt-5 mb-5">
        {
          Array.from({length:Math.ceil(products.length / productsPerPage)}, (_,i)=>(
            <button key={i} onClick={()=> paginate(i+1)} className={`px-4  py-2 mx-1 ${currentPage === i + 1 ? "bg-black text-white":"bg-white border"} `}>
              {i+1}
            </button>
          ))
        }
      </div>
    </>
  );
};

export default Product;
