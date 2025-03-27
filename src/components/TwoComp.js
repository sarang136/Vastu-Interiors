import React, { useState } from "react";
import { Link } from "react-router-dom";
import LivingRoomComp from "../utils/LivingRoomComp";

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
          <p>Living Room Interior Designs</p>
          <p style={{ fontSize: "20px", width: "820px" }}>
            Discover a wide range of handpicked, living room interior designs and décor ideas at Livspace. We bring you living room designs that are customizable, practical and trendy. From modular TV units to wall paintings and living room wall designs, you’ll find all the inspiration you’ll need to get started. Browse now to zero in on your favourite design and create a living room space that reflects your style.
          </p>
        </div>
      </div>

      {/* Kitchen Grid Display */}
      <div className="Kitchen-comp-grids-display">
        <div className="Kitchen-comp-gtc">
          {LivingRoomComp.map((LivingRoomComp) => (
            <div className="Kitchen-Comp-Grids" key={LivingRoomComp.id}>
              <Link to={LivingRoomComp.path}>
              <img src={LivingRoomComp.image} alt="Design" />
              </Link>
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


      {/* <div className="faqs-container-TwoComp">
        <div className="FAQ-heading">
          <p>FAQ About Living Room Designs</p>
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

            }}> 1) What is Modern living room style</p>
            Today, the modern living room style is gaining more popularity than ever. A modern living room style can be achieved by focusing on the idea that ‘less is more’. There should be minimal elements that optimize functionality while looking sleek and stylish. The colour palette of a modern style living room is mostly neutral with an accent wall if you want that pop of colour.           <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 2) How do I Modernise My Living Room?</p>
            - Modernising your living room is fairly simple. Here are a few things that you can try.
            A Neutral Colour Palette - Going with neutral colours like white or beige is a great choice for a modern vibe. If you aren’t a fan of neutrals, you can pick muted tones of the shades you love.

            Let the Light In - Natural light is an important element of modern interior decor as it adds warmth to the space and makes it look roomier. This is why you will see large French windows in many modern living rooms.

            Sleek Designs - A modern living room comprises sleek furniture and straight lines to maintain an elegant and sophisticated vibe. You can play with different textures like wood and leather while also making sure that the space is clutter-free.

            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 3) What are some Small Living Room Design Ideas?</p>
            - When designing interiors for small living rooms, you can choose from a plethora of options. Some of them are:
            Scandinavian Inspired
            Minimalist Style
            Modern Chic
            Colour pop
            Coastal vibe

            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 4) What are the Best Colour Combinations for the Living Room Interior?</p>
            - The colour palette of your living room sets the mood of your space and drives the design process as well. There are various colour combos you can opt for depending on the vibe you are going for. Here are some ideas you might like -
            Forest Green and White is a great combination for a nature-inspired living room.
            If you are interested in a rustic vibe, going with earth tones of brown, yellow, red, and olive green will be perfect.
            For a contemporary space, going with the classic black and white colour palette is the way to go.
            If your dining room is visually accessible from your living room, the colour combination can be kept consistent throughout the space.

            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 5)How to Accessorize your Living Room?</p>
            - Accessorising your living room is pretty important as these small details bring a space to life and add that special touch. Décor elements like plants, throws, clocks, and lamps can be used to let your personality shine through in your interior design and make it feel more like home.

          </div>


        </div>


      </div> */}


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
