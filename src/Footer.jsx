import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { BsFillCCircleFill } from "react-icons/bs";

const Footer = ({ logo2, pay, img4, img5, img6, img7 }) => {
  return (
    <div className="bg-dark text-white-50 ">
      <footer className="container pt-5">
        <div className="row">
          <div className="col-lg-3">
            <img src={logo2} alt="logo" className="mb-3" />
            <p className="mb-3">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <img src={pay} alt="" />
          </div>
          <div className="col-lg-3">
            <h3 className="text-light">SHOPPING</h3>
            <p>Home</p>
            <p>Shop</p>
            <p>About Us</p>
          </div>
          <div className="col-lg-3">
            <h3 className="text-light">PARTNER</h3>
            <div>
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              <img src={img7} alt="" />
            </div>
          </div>
          <div className="col-lg-3">
            <h3 className="text-light">NEWLETTER</h3>
            <p>
              Be the frist to Know about new arrivals, look books, sales &
              promos!
            </p>
            <div>
              <input
                type="text"
                className="opacity-0"
                placeholder="Your Email"
              />
              <BiEnvelope />
              <hr />
            </div>
          </div>
          <hr />
          <p className="text-center">
            Copyright <BsFillCCircleFill /> 2023 & 2020
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
