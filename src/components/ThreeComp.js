import React, { useState } from "react";
import { Link } from "react-router-dom";
import BedroomCompData from "../utils/BedroomComp";
import Anchors from "./Anchors";

const ThreeComp = () => {
  // State to store liked/unliked status for each item
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

      <section id="ThreeCompNavbar">
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
          <p>Bedroom Interior Designs</p>
          <p id="temp10">
            We’ve got a wide range of affordable and stylish bedroom designs you'll love, at Livspace. Our carefully-curated master bedroom designs come in a variety of styles, colour schemes and decor ideas - all of which can be customised to your taste. Whether you’re looking for a contemporary style or a room with rustic sensibilities, we’ve got all the bedroom interior design inspiration you’ll need to create a space that reflects your personality and taste. Take your pick from these trending designs and start your bedroom renovation journey today with Livspace.
          </p>
        </div>
      </div>

      {/* Kitchen Grid Display */}
      <div className="Kitchen-comp-grids-display">
        <div className="Kitchen-comp-gtc">
          {BedroomCompData.map((BedroomCompData) => (
            <div className="Kitchen-Comp-Grids" key={BedroomCompData.id}>
               
               <img src={BedroomCompData.image} alt="Design" />
               


              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
                {BedroomCompData.name}
              </p>
              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
                Size: {BedroomCompData.size}
                <button onClick={() => btnClick(BedroomCompData.id)}
                  style={{
                    backgroundColor: likedItems[BedroomCompData.id] === "Liked" ? "#ff4e4e" : "white",

                    // padding: "8px 16px",
                    // cursor: "pointer",
                    // borderRadius: "5px"
                  }}>
                  {likedItems[BedroomCompData.id] || "Like"}
                </button>
              </p>

            </div>
          ))}
        </div>
      </div>



      <div>
        <div className="FooterForThreeComp">
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
        <a href="#ThreeCompNavbar" >Go On Top</a>
      </div>

    </div>
  );
};

export default ThreeComp;
