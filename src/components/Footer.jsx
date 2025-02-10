import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Image from "./Image";
import foot from "../assets/OREBI©.png"
const Footer = () => {
  return (
    <>
      <div className="bg-Footerclr">
        <Container>
          <div className="">
            <footer className="footer sm:footer-horizontal   p-10">
              <nav>
                <h6 className="text-menuHcolor  font-bold leading-6 font-doom">MENU</h6>
                <a className="font-doom text-fColor leading-6 text-sm">Home</a>
                <a className="font-doom text-fColor leading-6 text-sm">Shop</a>
                <a className="font-doom text-fColor leading-6 text-sm">About</a>
                <a className="font-doom text-fColor leading-6 text-sm">Contact</a>
                <a className="font-doom text-fColor leading-6 text-sm">Journal</a>
              </nav>
              <nav>
                <h6 className="text-menuHcolor font-bold font-doom leading-6 ">SHOP</h6>
                <a className="font-doom text-fColor leading-6 text-sm">Category 1</a>
                <a className="font-doom text-fColor leading-6 text-sm">Category 2</a>
                <a className="font-doom text-fColor leading-6 text-sm">Category 3</a>
                <a className="font-doom text-fColor leading-6 text-sm">Category 4</a>
                <a className="font-doom text-fColor leading-6 text-sm">Category 5</a>
              </nav>
              <nav>
                <h6 className="text-menuHcolor font-bold font-doom leading-6 ">HELP</h6>
                <a className="font-doom text-fColor leading-6 text-sm">Privacy policy</a>
                <a className="font-doom text-fColor leading-6 text-sm">Terms & Conditions</a>
                <a className="font-doom text-fColor leading-6 text-sm">Special E-shop</a>
                <a className="font-doom text-fColor leading-6 text-sm">Shipping</a>
                <a className="font-doom text-fColor leading-6 text-sm">Secure Payments</a>
              </nav>
              <nav>
                <Heading as={'h3'} text={'(052) 611-5711'} className={'font-doom font-bold text-menuHcolor leading-6'}/>
                <Heading as={'h3'} text={'biswasgroupltd@.com'} className={'font-bold font-doom text-menuHcolor leading-6'}/>
                <Heading as={'h3'} text={'575 Crescent Ave. Quakertown, PA 18951'} className={'text-fColor font-doom leading-6 text-sm'}/>
              </nav>
              <nav className="gap-y-28">
              <Image imgSrc={foot} imgAlt={foot}/>
              <Heading as={'p'} text={'2020 Orebi Minimal eCommerce Figma Template by Adveits'} className={'font-doom text-fColor text-sm leading-6 '}/>
              </nav>
            </footer>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
