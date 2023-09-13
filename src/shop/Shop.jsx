import React from "react";
import { AiOutlineStar, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import "./shop.css";
import { Button } from "react-bootstrap";

const Shop = ({ data, addtocard }) => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row grid3 d-flex justify-content-center">
        {data.map((product) => (
          <Card
            key={product.id}
            className="col-lg-2 col-md-5 border-0 position-relative parent mb-5"
          >
            <Card.Img variant="top" src={product.img} />
            <Card.Text
              className="text-center position-absolute top-0 start-0 mt-5"
              style={{
                color: product.label.color,
                background: product.label.background,
                width: "25%",
              }}
            >
              {product.label.name}
            </Card.Text>
            <Card.Text className="flex-column d-flex justify-content-between position-absolute top-0 end-0 mt-5 fs-3 text icon-style">
              <AiOutlineHeart className="mb-3" />
              <BsArrowLeftRight />
            </Card.Text>
            <Card.Body>
              <Card.Title className="productname">{product.name}</Card.Title>
              <Button
                className="addcard bg-transparent border-0"
                onClick={() => addtocard(product)}
              >
                + Add to card
              </Button>
              <Card.Text>
                <AiFillStar className="text-warning" />
                <AiFillStar className="text-warning" />
                <AiFillStar className="text-warning" />
                <AiOutlineStar />
              </Card.Text>
              <Card.Text>{product.price}$</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
