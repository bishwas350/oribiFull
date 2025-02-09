import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import PromoOne from '../../assets/offerOne.png'
import PromoTwo from '../../assets/OfferTwo.png'
import PromoThree from '../../assets/offerThree.png'

const Promotion = () => {
  return (
    <>
      <div className="pt-[176px] pb-[120px]">
      <Container>
        <Flex className={"justify-between"}>
            <div className="w-[47%]">
            <Image imgSrc={PromoOne} className={"w-full"}/>
            </div>
            <div className="w-1/2">
            <Image imgSrc={PromoTwo} className={"h-[48%] w-full mb-3"}/>
            <Image imgSrc={PromoThree} className={"h-[48%] w-full"}/>
            </div>
        </Flex>
      </Container>
      </div>
    </>
  );
};

export default Promotion;
