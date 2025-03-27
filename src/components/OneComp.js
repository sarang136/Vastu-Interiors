import React, { useState } from "react";
import { Link } from "react-router-dom";
import KitchenCompData from "../utils/KitchenCompData";


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
          <div className="container">
            <div className="anchors">
              <div className="nothingDiv">
                <Link style={{ textDecoration: "none" }} to="/">Home</Link>
                <Link style={{ textDecoration: "none" }} to="/about">About Us</Link>
                <Link style={{ textDecoration: "none" }} to="/projects">Projects</Link>
                <Link style={{ textDecoration: "none" }} to="/contact">Design Ideas</Link>

                
              </div>
            </div>
            
          </div>
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
          <p>Modular Kitchen Designs</p>
          <p style={{ fontSize: "20px", width: "820px" }}>
            We craft simple modular kitchen designs that are the perfect blend of functionality and style. Our curated, modular kitchen designs in India range from simple kitchens with minimal interiors to more elaborately designed kitchen interior designs. All our modern kitchen design ideas can be customised to fit your budget and existing space. We also have kitchen interior designs that work for all shapes: Be it a L-shaped kitchen, U-shaped kitchen or open kitchen design - crafting a kitchen interior design that works best for your home is our goal! Browse through our top kitchen designs to transform your space today.
          </p>
        </div>
      </div>

      {/* Kitchen Grid Display */}
      <div className="Kitchen-comp-grids-display">
        <div className="Kitchen-comp-gtc">
          {KitchenCompData.map((resultKitchenData) => (
            <div className="Kitchen-Comp-Grids" key={resultKitchenData.id}>


              <Link to={resultKitchenData.path}>
                <img src={resultKitchenData.image} alt="Design" />
              </Link>
              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
                {resultKitchenData.name}
              </p>
              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
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
        <div className="FooterForOneComp">
          <div className='footer-container'>
            <div className='footertext'>
              <p>Vastu Interiors</p>
            </div>

            <div className='contactsGridsDisplay'>
              <div className='contactsGridsGtc'>
                <div className='mainGrids'>
                  <p style={{ marginTop: '20px', marginLeft: "20px" }}>Email id : sandeepjangid@gmail.com</p>
                  <p style={{ marginTop: '0px', marginLeft: "20px" }}>Contact Number : 9665150750</p>
                  <div className='scHandles'>
                    <div className='logos'><a href='https://www.livspace.com/in/about-us'><img src='Images/insta.webp'></img></a></div>
                    <div className='logos' style={{ marginLeft: "-40px", width: "90%" }}><a href='https://www.livspace.com/in/about-us'><img src='Images/yt.webp'></img></a></div>
                    <div className='logos' style={{ marginLeft: "-32px", width: "80%", height: "35px", marginTop: "9px" }}><a href='https://www.livspace.com/in/about-us'><img src='Images/fb.webp'></img></a></div>
                  </div>
                </div>
                <div className='mainGrids locations'>
                  <p>Locations - Mumbai, Pune, Nagpur, Nashik, Aurangabad, Solapur, Kolhapur, Thane, Amravati, Ratnagiri, Jalgaon, Latur, Satara, Sangli, Ahmednagar, Chandrapur, Nanded, Dhule, Bhiwandi, and Akola </p>
                </div>
              </div>

            </div>
            <div className='copyright'>
              <p>© 2025 VastuInteriors.com All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>

      <div className="GoTopBtn">
        <a href="#OneCompNavbar" >Go On Top</a>
      </div>
    </div>
  );
};

export default OneComp;
