import React, { useState } from "react";
import { Link } from "react-router-dom";
import WardrobeCompData from "../utils/WardrobeComp";
import Anchors from "./Anchors";
import Footer from "./Footer";

const FourComp = () => {
  // State to store liked/unliked status for each item
  const [likedItems, setLikedItems] = useState({});


  const btnClick = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: prev[id] === "Liked" ? "Like" : "Liked",
    }));
  };






  return (
    <div className="WardCompContainer">
      {/* Navigation */}

      <section id="FourCompNavbar">
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
          <p>Wardrobe Interior Design Ideas</p>
          <p id="temp10">
            This is your one-stop shop for latest, trending wardrobe designs. Livspace' modular wardrobe designs are ergonomically designed and come in a wide spectrum of colours, finishes and materials. Built for smart storage, our wardrobe ideas are function-forward, easy to use and promise to make stunning additions to the spaces in your bedroom. Explore our collection of wardrobe interior designs and find the ideal cupboard designs for your bedroom design.
          </p>
        </div>
      </div>

      {/* Kitchen Grid Display */}
      <div className="Kitchen-comp-grids-display">
        <div className="Kitchen-comp-gtc">
          {WardrobeCompData.map((WardrobeCompData) => (
            <div className="Kitchen-Comp-Grids" key={WardrobeCompData.id}>
              <img src={WardrobeCompData.image} alt="Design" />
              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
                {WardrobeCompData.name}
              </p>
              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
                Size: {WardrobeCompData.size}
                <button onClick={() => btnClick(WardrobeCompData.id)}
                  style={{
                    backgroundColor: likedItems[WardrobeCompData.id] === "Liked" ? "#ff4e4e" : "white",
                  }}>
                  {likedItems[WardrobeCompData.id] || "Like"}
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
        <a href="#FourCompNavbar" >Go On Top</a>
      </div>

    </div>
  );
};

export default FourComp;
