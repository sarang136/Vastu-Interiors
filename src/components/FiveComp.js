import React, { useState } from "react";
import { Link } from "react-router-dom";
import DiningCards from "../utils/DiningCards";

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
          <p>Dining Room Designs & Décor</p>
          <p style={{ fontSize: "20px", width: "820px" }}>
            It is often believed that a family that eats together, stays together, thereby making the dining room one of the most indispensable areas in a house! Whether you are looking for a compact dining unit or a spacious one, here’s your daily dose of dining room interior design inspiration to start your home interior journey today. </p>
        </div>
      </div>

      {/* Kitchen Grid Display */}
      <div className="Kitchen-comp-grids-display">
        <div className="Kitchen-comp-gtc">
          {DiningCards.map((DiningCards) => (
            <div className="Kitchen-Comp-Grids" key={DiningCards.id}>

              <Link to={DiningCards.path}>
                <img src={DiningCards.image} alt="Design" />
              </Link>

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


      {/* <div className="faqs-container-FiveComp">
        <div className="FAQ-heading">
          <p>FAQ About Dining Room Designs</p>
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

            }}> 1) What are the Essentials of a Good Dining Room Interior Design?</p>

            -    You can choose any style for your dining room interior design, but some essentials will remain constant in all of them. A comfortable dining table Crockery cabinet to store your crockeries Table linens to help set the table Appropriate lighting and seating arrangements A convenient pathway from the kitchen to the table

            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 2) How to Design a Dining Room Interior on a Budget? </p>
            -
            With some super simple tips, you can design the dining room you've always wanted on a budget. Light up the space with a good pendant or chandelier Rugs can instantly add dimension and class to your dining area Pick complementing accessories in terms of linen and cutlery Do up the wall with a colourful wallpaper You can substitute crockery units with floating shelves Use benches instead of chairs to accommodate more people Invest in decor - photo frames, bookshelves, paintings to instantly spruce up your space


            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 3) How to Separate a Combined Dining Hall Design?</p>

            - If you have a combined dining hall, you can embrace an open concept dining room or use a few simple alternatives to separate a combined dining room. A lattice screen or jali An L-shaped sofa A glass door Different flooring



            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 4) How Do You Style a Small Dining Room? </p>
            -
            There are plenty of small dining room ideas that can help maximise your space. Pick neutral tones Add artwork on the walls Keep functional décor Add a contrasting rug Paint the “fifth wall” a.k.a your ceiling to add depth to your room


            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 5) What are Some Dining Room Seating Ideas?</p>
            -
            We often associate a dining table with matching chairs; however, this is quickly changing. People are experimenting by mixing and matching furniture pieces for a modern feel. You can do this by placing assorted styles of chairs or by painting the chairs you already have in distinct colours. If you want to go a step further, replacing the chairs completely is also an option. You can substitute them for a bench on one side of the table or even use stools and beanbags as an alternative.
          </div>


        </div>


      </div> */}


      <div>
        <div className="FooterForFiveComp">
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
        <a href="#FiveCompNavbar" >Go On Top</a>
      </div>

    </div>
  );
};

export default FiveComp;
