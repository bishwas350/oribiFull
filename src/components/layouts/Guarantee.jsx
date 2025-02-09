import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck, FaUndo } from "react-icons/fa";

import Heading from "../Heading";

const Guarantee = () => {
  return (
    <>
      <div className="border-b-2 border-borderColor py-[30px]">
        <Container>
            <Flex className={"justify-between"}>
            <div className="flex items-center gap-x-4">
            <PiNumberTwoBold/>
            <Heading as={"h4"} text={"Two years warranty"}/>
            </div>
            <div className="flex items-center gap-x-4">
            <FaTruck/>
            <Heading as={"h4"} text={"Free shipping"}/>
            </div>
            <div className="flex items-center gap-x-4">
            <FaUndo/>
            <Heading as={"h4"} text={"Return policy in 30 days"}/>
            </div>
            </Flex>
        </Container>
      </div>
    </>
  );
};

export default Guarantee;
