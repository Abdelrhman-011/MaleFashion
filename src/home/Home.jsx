import React from "react";
import Firestsec from "./Firestsec";
import Secondsec from "./Secondsec";

const Home = ({ hero, img1, img2, img3 }) => {
  return (
    <div>
      <Firestsec hero={hero} />
      <Secondsec img1={img1} img2={img2} img3={img3} />
    </div>
  );
};

export default Home;
