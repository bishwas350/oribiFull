import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/Logo.png";
import Menu from "../Menu";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Heading from "../Heading";
import Search from "../Search";
import SearchResults from "../SearchResults";

const Header = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[40%]">
              <Image imgSrc={Logo} />
            </div>
            <div className="w-[60%]">
              <Menu className={"text-sm text-menuColor"}>
                <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                  Home
                </li>
                <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                  Shop
                </li>
                <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                  About
                </li>
                <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                  Contacts
                </li>
                <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                  Journal
                </li>
              </Menu>
            </div>
            <div className=""></div>
          </Flex>
        </Container>
      </div>
      <div className="bg-categoryBg py-6">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="w-[30%]">
              <Flex className={"gap-x-3 items-center"}>
                <HiBars3BottomLeft />
                <Heading
                  as={"p"}
                  text={"Shop by Category"}
                  className={"text-sm text-menuHcolor"}
                />
              </Flex>
            </div>
            <div className="relative">
              <Search setData={setData} />
              <SearchResults data={data} className="absolute left-0 top-20" />
            </div>

            <div className="w-[20%] ">
              <Flex className={"gap-x-8 justify-end"}>
                <div className="flex gap-2">
                  <FaUser />
                  <FaCaretDown />
                </div>
                <FaShoppingCart />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
