import React, { useState } from "react";
import { Link } from "react-router-dom";
import LivingRoomComp from "../utils/LivingRoomComp";
import Anchors from "./Anchors";
const TwoComp = () => {
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
     
     <section id="TwoCompNavbar">
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
          <p>Living Room Interior Designs</p>
          <p id="temp10">
            Discover a wide range of handpicked, living room interior designs and décor ideas at Livspace. We bring you living room designs that are customizable, practical and trendy. From modular TV units to wall paintings and living room wall designs, you’ll find all the inspiration you’ll need to get started. Browse now to zero in on your favourite design and create a living room space that reflects your style.
          </p>
        </div>
      </div>

      {/* Kitchen Grid Display */}
      <div className="Kitchen-comp-grids-display">
        <div className="Kitchen-comp-gtc">
          {LivingRoomComp.map((LivingRoomComp) => (
            <div className="Kitchen-Comp-Grids" key={LivingRoomComp.id}>
              
              <img src={LivingRoomComp.image} alt="Design" />
             
              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
                {LivingRoomComp.name}
              </p>
              <p style={{ marginTop: "5px", marginLeft: "15px", fontWeight: "500" }}>
                Size: {LivingRoomComp.size}
                <button onClick={() => btnClick(LivingRoomComp.id)}
                  style={{
                    backgroundColor: likedItems[LivingRoomComp.id] === "Liked" ? "#ff4e4e" : "white",

                  }}>
                  {likedItems[LivingRoomComp.id] || "Like"}
                </button>
              </p>

            </div>
          ))}
        </div>
      </div>


          


      <div>
        <div className="FooterForTwoComp">
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
<a href="#TwoCompNavbar" >Go On Top</a>
</div>

    </div>
  );
};

export default TwoComp;
