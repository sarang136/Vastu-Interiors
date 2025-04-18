import React, { useState } from "react";
import { Link } from "react-router-dom";
import KitchenCompData from "../utils/KitchenCompData";
import Anchors from "./Anchors";
import Footer from "./Footer";

const OneComp = () => {

  const [likedItems, setLikedItems] = useState({});


  const btnClick = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: prev[id] === "Liked" ? "Like" : "Liked",
    }));
  };





  return (
    <div className="kitchenCompContainer">
      {/* Navigation */}
      <section id="OneCompNavbar">
        <div className="navbarOfKitchenComp">
       <Anchors/>
        </div>
      </section>

      {/* Sub Navigation */}
      <div className="secondNavbar-KitchenComp">
        <div className="anchors2">
          <div className="nothingDiv2">
            <Link className="nav-item" style={{ textDecoration: "none" }} to="/oneComp">Kitchen</Link>
            <Link className="nav-item"style={{ textDecoration: "none", marginLeft: "40px" }} to="/twoComp">Living Room</Link>
            <Link className="nav-item"style={{ textDecoration: "none", marginLeft: "40px" }} to="/threeComp">Master Bedroom</Link>
            <Link className="nav-item"style={{ textDecoration: "none", marginLeft: "40px" }} to="/fourComp">Wardrobe</Link>
            <Link className="nav-item"style={{ textDecoration: "none", marginLeft: "40px" }} to="/fiveComp">Dining Room</Link>
            <Link className="nav-item"style={{ textDecoration: "none", marginLeft: "40px" }} to="/sixComp">Kids Bedroom</Link>
            <Link className="nav-item"style={{ textDecoration: "none", marginLeft: "40px" }} to="/contact">Go Back</Link>
          </div>
        </div>
      </div>


      
      
      {/* Hero Section */}
      <div className="OneCompHeroContainer">
        <div className="textPartOfOneComp">
          <p>Modular Kitchen Designs</p>
          <p id="temp10">
            We craft simple modular kitchen designs that are the perfect blend of functionality and style. Our curated, modular kitchen designs in India range from simple kitchens with minimal interiors to more elaborately designed kitchen interior designs. All our modern kitchen design ideas can be customised to fit your budget and existing space. We also have kitchen interior designs that work for all shapes: Be it a L-shaped kitchen, U-shaped kitchen or open kitchen design - crafting a kitchen interior design that works best for your home is our goal! Browse through our top kitchen designs to transform your space today.
          </p>
        </div>
      </div>

      {/* Kitchen Grid Display */}
      <div className="Kitchen-comp-grids-display">
        <div className="Kitchen-comp-gtc">
          {KitchenCompData.map((resultKitchenData) => (
            <div className="Kitchen-Comp-Grids" key={resultKitchenData.id}>


              
                <img src={resultKitchenData.image} alt="Design" />
              
              <p>
                {resultKitchenData.name}
              </p>
              <p>
                Size: {resultKitchenData.size}
                <button onClick={() => btnClick(resultKitchenData.id)}
                  style={{
                    backgroundColor: likedItems[resultKitchenData.id] === "Liked" ? "#ff4e4e" : "white",
                  }}>
                  {likedItems[resultKitchenData.id] || "Like"}
                </button>
              </p>

            </div>
          ))}
        </div>
      </div>


      {/* <div className="faqs-container">
        <div className="FAQ-heading">
          <p>FAQ About Modular Kitchens Designs</p>
        </div>


        <div className="Qa-FAQS">

          <p id="para" style={{
            fontWeight: "lighter",
            color: "gray",
            fontSize: "18px"
          }}>
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 1) What is Modular Kitchen?</p>
            - Modular kitchens are pre-assembled kitchens that come in different components and can be easily configured to meet your space
            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 2) Why Choose Modular Kitchens?</p>
            - Modular kitchens are budget-friendly, long-lasting, easy-to-use kitchens that can be customised to your preference. They are easy to install and can be dismantled and moved to new homes easily.
            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 3) What are some popular kitchen designs layout for 2025?</p>
            - Some of the most popular kitchen design layouts are - The One Wall Kitchen The Gallery Kitchen L-Shaped Kitchen U-Shaped Kitchen The Island Kitchen The Peninsula Kitchen. At Livspace Design Ideas we've got design inspiration for a number of kitchen layouts to help you style your dream kitchen and give it the look you've always wanted.
            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 4) How do I Choose a good Modular Kitchens?</p>
            - Understand your kitchen layout, list your requirements and pick a modular kitchen design depending on your budget and requirements. You can also get in touch with an expert interior designer from Livspace, who can recommend and craft the perfect modular kitchen for your home.
            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 5) What kind of kitchen designs are recomended of small spaces?</p>
            - Try simple layouts like a straight kitchen layout or a parallel kitchen layout. Keep design elements to a minimum, maybe opt for a minimalist look. Ensure the design follows the golden triangle rule to make the most of your small kitchen. Additionally, try to use loft and wall unit cabinets to improve storage space without compromising on your cooking and cleaning space.

            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 6) What is the average cost of Modular Kitchens in India?</p>
            - Modular kitchen design prices start from 1.37 Lakhs. The exact pricing depends on various factors like the city you are in, the size of your kitchen, the materials used etc.
          </p>


        </div>


      </div> */}


      <div>
       <Footer/>
      </div>

      <div className="GoTopBtn">
        <a href="#OneCompNavbar" >Go On Top</a>
      </div>
    </div>
  );
};

export default OneComp;
