import React, { useState } from "react";
import { Link } from "react-router-dom";
import KidsData from "../utils/KidsData";
import Anchors from "./Anchors";
import Footer from "./Footer";

const SixComp = () => {
  // State to store liked/unliked status for each item
  const [likedItems, setLikedItems] = useState({});


  const btnClick = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: prev[id] === "Liked" ? "Like" : "Liked",
    }));
  };






  return (
    <div className="KidsCompContainer">
      {/* Navigation */}

      <section id="SixCompNavbar">
        <div className="navbarOfKidsComp">
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
        <div className="textPartOfOneComp ">
          <p>Kids Bedroom Designs</p>
          
          <p id="temp10">
          Designing your kid’s bedroom space can be an exciting time for you and your child. We’re certain you’ll find a healthy dose of inspiration and trending kid’s room designs that will match your child's personality! Our handpicked, affordable kid’s bedroom designs can be customised to suit your space requirements and your child’s imagination. Get in touch with our experts today to build a bedroom that your child will love. </p>
        </div>
      </div>

      {/* Kitchen Grid Display */}
      <div className="Kitchen-comp-grids-display">
        <div className="Kitchen-comp-gtc">
          {KidsData.map((KidsData) => (
            <div className="Kitchen-Comp-Grids" key={KidsData.id}>
              

              <img src={KidsData.image} alt="Design" />
              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
                {KidsData.name}
              </p>
              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
                Size: {KidsData.size}
                <button onClick={() => btnClick(KidsData.id)}
                  style={{
                    backgroundColor: likedItems[KidsData.id] === "Liked" ? "#ff4e4e" : "white",
                  }}>
                  {likedItems[KidsData.id] || "Like"}
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
        <a href="#SixCompNavbar" >Go On Top</a>
      </div>

    </div>
  );
};

export default SixComp;
