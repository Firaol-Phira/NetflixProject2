import React from "react";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import RowList from "../Components/Rows/RowList/RowList.jsx";
import Transition from "../Components/Transition/Transition.jsx";
function Home() {
  return (
    <div>
      <Header />
    <Banner/>
    <Transition/>
    <RowList/>
      <Footer />
      
    </div>
  );
}

export default Home;
