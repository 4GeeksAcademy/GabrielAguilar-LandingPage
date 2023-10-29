import React from "react";
import Nav from "./nav.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div>
      <Nav/>
      <div className="container">
        <Jumbotron />
        <Card />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;