import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Secondsec = ({ img1, img2, img3 }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center mb-5">
          <h3>Clothing</h3>
          <h3>Collection 2023</h3>
          <Button
            className="text-decoration-underline text-black border-0 bg-transparent"
            as={Link}
            to="/shop"
          >
            Shop-Now
          </Button>
        </div>
        <img
          src={img1}
          className="col-lg-6 col-md-6 col-sm-12 rounded mb-5"
          alt="..."
        />
        <img
          src={img3}
          className="col-lg-6 col-md-6 col-sm-12 rounded mb-5"
          alt="..."
        />
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center mb-5">
          <h3>Shoes Spring</h3>
          <h3>2023</h3>
          <Button
            className="text-decoration-underline text-black border-0 bg-transparent"
            as={Link}
            to="/shop"
          >
            Shop-Now
          </Button>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center mb-5">
          <h3>Accessories</h3>
          <Button
            className="text-decoration-underline text-black border-0 bg-transparent"
            as={Link}
            to="/shop"
          >
            Shop-Now
          </Button>
        </div>
        <img
          src={img2}
          className="col-lg-6 col-md-6 col-sm-12 rounded  mb-5"
          alt="..."
        />
      </div>
    </div>
  );
};

export default Secondsec;
