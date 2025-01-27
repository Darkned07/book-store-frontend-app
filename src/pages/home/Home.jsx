import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recomended from "./Recomended";
import News from "./News";

function Home() {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recomended />
      <News />
    </>
  );
}

export default Home;
