import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ setData, className }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        const data = json.filter(
          (product) => value && product.title.toLowerCase().includes(value)
        );
        setData(data);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
      <div className={`${className}`}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Products"
            className="w-[30vw] bg-white rounded-md p-4"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <FaSearch
            className={
              "absolute right-4 top-1/2 -translate-y-1/2"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Search;
