import React, { useState } from "react";
import Header from "./Header";
import "./styleheader.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import hero from "./images/hero/hero-2.jpg";
import img1 from "./images/banner/banner-1.jpg";
import img2 from "./images/banner/banner-2.jpg";
import img3 from "./images/banner/banner-3.jpg";
import logo2 from "./images/hero/footer-logo.png";
import pay from "./images/hero/payment.png";
import img4 from "./images/clients/client-1.png";
import img5 from "./images/clients/client-5.png";
import img6 from "./images/clients/client-3.png";
import img7 from "./images/clients/client-4.png";
import Footer from "./Footer";
import Shop from "./shop/Shop";
import products from "./data";
import Shopping from "./shoping/Shopping";
import img8 from "./images/banner/product-not-found-218.jpg";
import Login from "./login/Login";
import Signup from "./signup/Signup";

const App = () => {
  const [data, setdata] = useState(products);

  const [productsShoping, setproductsShoping] = useState([]);

  const addtocard = (product) => {
    const check = productsShoping.some((e) => {
      return product.id === e.id;
    });
    if (check) {
      productsShoping.map((e) => {
        if (e.id === product.id) {
          e.count += 1;
          return e;
        }
      });
      setproductsShoping([...productsShoping]);
    } else {
      setproductsShoping([...productsShoping, product]);
    }
  };

  const increment = (product) => {
    const check = productsShoping.some((e) => {
      return product.id === e.id;
    });
    if (check) {
      productsShoping.map((e) => {
        if (e.id === product.id) {
          e.count += 1;
          return e;
        }
      });
      setproductsShoping([...productsShoping]);
    }
  };

  const decrement = (product) => {
    const check = productsShoping.some((e) => {
      return product.id === e.id;
    });
    if (check) {
      productsShoping.map((e) => {
        if (e.id === product.id && e.count > 1) {
          e.count -= 1;
          return e;
        }
      });
      setproductsShoping([...productsShoping]);
    }
  };

  const delcard = (product) => {
    const newarr = productsShoping.filter((e) => product.id !== e.id);
    setproductsShoping(newarr);
    data.map((t) => {
      if (product.id === t.id) {
        t.count = 1;
        return t;
      }
    });
    setdata(data);
  };
  return (
    <div>
      <div className="bg-dark text-center">
        <h3 className="changecolor pb-2">
          Free Shopping. 30-day return or guarantee
        </h3>
      </div>
      <Header productsShoping={productsShoping} />
      <Routes>
        <Route
          path="/"
          element={<Home hero={hero} img1={img1} img2={img2} img3={img3} />}
        />
        <Route
          path="/shop"
          element={<Shop data={data} addtocard={addtocard} />}
        />
        <Route
          path="/shopping"
          element={
            <Shopping
              productsShoping={productsShoping}
              increment={increment}
              decrement={decrement}
              delcard={delcard}
              img8={img8}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer
        logo2={logo2}
        pay={pay}
        img4={img4}
        img5={img5}
        img6={img6}
        img7={img7}
      />
    </div>
  );
};

export default App;
