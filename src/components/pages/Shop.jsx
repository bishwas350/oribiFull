import React from "react";
import Product from "../Product";
import Container from "../Container";
import Flex from "../Flex";

const Shop = () => {
  return (
    <>
      <div className="">
        <Container>
          <Flex className={"flex-wrap gap-x-20 justify-center mt-10"}>
            <Product />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Shop;
