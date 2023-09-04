import React from "react";
import Button from "react-bootstrap/Button";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./home.css";

const Firestsec = ({ hero }) => {
  return (
    <div className="position-relative mb-5 ">
      <img src={hero} className="img-fluid" />
      <div className="position-absolute top-50 start-0 translate-middle-y ms-5 ps-5 displaynone">
        <p className="text-danger">SUMMER COLLECTION</p>
        <h2>Fall - Winter</h2>
        <h2>Collection 2023</h2>
        <p>A specialist label creating luxery essertials.</p>
        <Button variant="danger" as={Link} to="/shop">
          Shop Now <BsArrowRightShort />
        </Button>
      </div>
    </div>
  );
};

export default Firestsec;
