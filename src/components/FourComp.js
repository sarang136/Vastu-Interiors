import React, { useState } from "react";
import { Link } from "react-router-dom";
import WardrobeCompData from "../utils/WardrobeComp";

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
          <p>Wardrobe Interior Design Ideas</p>
          <p style={{ fontSize: "20px", width: "820px" }}>
            This is your one-stop shop for latest, trending wardrobe designs. Livspace' modular wardrobe designs are ergonomically designed and come in a wide spectrum of colours, finishes and materials. Built for smart storage, our wardrobe ideas are function-forward, easy to use and promise to make stunning additions to the spaces in your bedroom. Explore our collection of wardrobe interior designs and find the ideal cupboard designs for your bedroom design.
          </p>
        </div>
      </div>

      {/* Kitchen Grid Display */}
      <div className="Kitchen-comp-grids-display">
        <div className="Kitchen-comp-gtc">
          {WardrobeCompData.map((WardrobeCompData) => (
            <div className="Kitchen-Comp-Grids" key={WardrobeCompData.id}>
              <Link to={WardrobeCompData.path}><img src={WardrobeCompData.image} alt="Design" /></Link>
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


      {/* <div className="faqs-container-ThreeComp">
        <div className="FAQ-heading">
          <p>FAQ About Modular Wardrobe Designs</p>


        </div>


        <div className="Qa-FAQS">

          <div id="para" style={{
            fontWeight: "lighter",
            color: "gray",
            fontSize: "18px"
          }}>
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 1) Which type of wardrobe is best for the bedroom ?</p>

            -  There are a wide variety of wardrobes available in the market and on online shopping platforms. However, it is best to choose a wardrobe according to the width and breadth of your bedroom. If you have a small bedroom, it is a good idea to go for a compact wardrobe. On the other hand, if you have a spacious area, you can utilise it by installing a more spacious wardrobe with double doors and multiple shelves.
            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 2) How To Pick A Wardrobe Design For Bedroom ?</p>
            - Before designing your room, home, or any other personal space, it is imperative to keep in mind that all the almirah design ideas must reflect your taste and personality while prioritising your comfort. Firstly, introspect your room and choose a wardrobe that fits your room, ties the space together and complements your existing interiors. Secondly, pay attention to the quality of the material that is used to build the wardrobe. The material you choose for your modular wardrobe will eventually determine how durable the wardrobe is in the long run.



            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 3) Can you get walk-in wardrobes for small rooms ?</p>
            - Walk-in closets provide a separate and exclusive space for organising clothes, shoes, accessories, and many other personal belongings. Yes, you can get a walk-in wardrobe for small rooms by going for compact wardrobe designs for bedrooms that do not require too much space and also serve the purpose in an efficient and optimal manner.



            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 4) What Is The Difference Between A Closet And A Wardrobe ?</p>
            - The main difference between a closet and a wardrobe interior design is the size, design, and purpose of the storage space. A closet is a smaller, enclosed space built into a wall, while a wardrobe is a larger, freestanding piece of furniture.



            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 5) Is An Almirah The Same As A Wardrobe ?</p>
            -
            Yes, an almirah is the same as a wardrobe. The term 'almirah' is used in India, Pakistan, and other South Asian countries to describe a type of freestanding cabinet or cupboard that is used for storage, often for clothing and other personal items. An almirah is similar to a wardrobe in design and purpose, and is often used as a substitute for a traditional closet. Almirahs can be made of various materials, including wood, metal, and plastic, and can range in size from small and compact to large and spacious.
          </div>


        </div>


      </div> */}


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
        <a href="#FourCompNavbar" >Go On Top</a>
      </div>

    </div>
  );
};

export default FourComp;
