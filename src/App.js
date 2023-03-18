import React from "react";
import "./App.css";

import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Promo from "./components/Promo/Promo";
import Review from "./components/Review/Review";
import Video from "./components/Video/Video";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <News />
      <Video />
      <Promo />
      <Review />
      <Footer />
    </>
  )
}

export default App;
