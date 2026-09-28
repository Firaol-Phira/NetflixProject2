import React from "react";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import RowList from "../Components/Rows/RowList/RowList.jsx";
import Transition from "../Components/Transition/Transition.jsx";
import RowListM from "../Components/RowsMore/RowList/RowListM.jsx"
import Faq from "../Components/FAQ/Faq.jsx";
import End from "../Components/End/End.jsx";
import Lan from "../Components/LanguageAndLeft/Lan.jsx";

function Home() {
  return (
    <div>
      <Header />
    <Banner/>
    <Transition/>
    <RowList/>
    <RowListM/>
    <Faq/>
    <End/>
    
      <Footer /><Lan/>
    </div>
  );
}

export default Home;
