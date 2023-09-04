import React from "react";
import { AiFillCreditCard, AiFillDelete } from "react-icons/ai";
import "./shoping.css";

const Shopping = ({ productsShoping, increment, decrement, delcard, img8 }) => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row grid2">
        <div className="col-lg-8 col-md-8 col-sm-10">
          {productsShoping.length === 0 ? (
            <img src={img8} className="img-fluid" alt="..." />
          ) : (
            <div>
              {productsShoping.map((product) => (
                <div key={product.id} className="row grid">
                  <img
                    src={product.img}
                    alt="product"
                    className="col-lg-2 col-md-2"
                  />
                  <div className="col-lg-3 col-md-3">
                    <h5>{product.name}</h5>
                    <h5>${product.price}</h5>
                  </div>
                  <div className="col-lg-2 col-md-2 d-flex flex-row justify-content-between align-items-center">
                    <button
                      className="bg-transparent fs-1 text border-0"
                      onClick={() => decrement(product)}
                    >
                      -
                    </button>
                    <h5 className="pt-3">{product.count}</h5>
                    <button
                      className="bg-transparent fs-2 text border-0"
                      onClick={() => increment(product)}
                    >
                      +
                    </button>
                  </div>
                  <h4 className="col-lg-2 col-md-2 d-flex flex-row justify-content-center align-items-center">
                    ${product.count * product.price}
                  </h4>
                  <div className="col-lg-2 col-md-1 d-flex flex-row justify-content-center align-items-center ">
                    <AiFillDelete
                      className="fs-3 text pointer"
                      onClick={() => delcard(product)}
                    />
                  </div>

                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-lg-3 col-md-3 col-sm-5 bg-secondary h-25 bg-opacity-25">
          <h4>CART TOTAL</h4>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h3>
              $
              {productsShoping
                .map((product) => product.price * product.count)
                .reduce((e, i) => e + i, 0)}
            </h3>
            <AiFillCreditCard className="fs-3 text" />
          </div>
          <button className="w-100 mb-2 bg-secondary border-0">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
