import React, { useState } from "react";
import { Link } from "react-router-dom";
import DiningCards from "../utils/DiningCards";
import Anchors from "./Anchors";
import Footer from "./Footer";

const FiveComp = () => {
  // State to store liked/unliked status for each item
  const [likedItems, setLikedItems] = useState({});


  const btnClick = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: prev[id] === "Liked" ? "Like" : "Liked",
    }));
  };

  return (
    <div className="DiningCompContainer">
      {/* Navigation */}

      <section id="FiveCompNavbar">
        <div className="navbarOfKitchenComp">
          <Anchors/>
        </div>
      </section>

      {/* Sub Navigation */}
      <div className="secondNavbar-KitchenComp">
        <div className="anchors2">
          <div className="nothingDiv2">
            <Link style={{ textDecoration: "none" }} to="/oneComp">Kitchen</Link>
            <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/twoComp">Living Room</Link>
            <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/threeComp">Master Bedroom</Link>
            <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/fourComp">Wardrobe</Link>
            <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/fiveComp">Dining Room</Link>
            <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/sixComp">Kids Bedroom</Link>
            <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/contact">Go Back</Link>
          </div>
        </div>
      </div>




      {/* Hero Section */}
      <div className="OneCompHeroContainer">
        <div className="textPartOfOneComp">
          <p>Dining Room Designs & Décor</p>
          <p id="temp10">
            It is often believed that a family that eats together, stays together, thereby making the dining room one of the most indispensable areas in a house! Whether you are looking for a compact dining unit or a spacious one, here’s your daily dose of dining room interior design inspiration to start your home interior journey today. </p>
        </div>
      </div>

      {/* Kitchen Grid Display */}
      <div className="Kitchen-comp-grids-display">
        <div className="Kitchen-comp-gtc">
          {DiningCards.map((DiningCards) => (
            <div className="Kitchen-Comp-Grids" key={DiningCards.id}>

            
                <img src={DiningCards.image} alt="Design" />
              

              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
                {DiningCards.name}
              </p>
              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
                Size: {DiningCards.size}
                <button onClick={() => btnClick(DiningCards.id)}
                  style={{
                    backgroundColor: likedItems[DiningCards.id] === "Liked" ? "#ff4e4e" : "white",
                  }}>
                  {likedItems[DiningCards.id] || "Like"}
                </button>
              </p>

            </div>
          ))}
        </div>
      </div>


    

      <div>
       <Footer/>
      </div>



      <div className="GoTopBtn">
        <a href="#FiveCompNavbar" >Go On Top</a>
      </div>

    </div>
  );
};

export default FiveComp;
