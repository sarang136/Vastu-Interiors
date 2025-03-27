import React, { useState } from "react";
import { Link } from "react-router-dom";
import BedroomCompData from "../utils/BedroomComp";

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
          <p>Bedroom Interior Designs</p>
          <p style={{ fontSize: "20px", width: "820px" }}>
            We’ve got a wide range of affordable and stylish bedroom designs you'll love, at Livspace. Our carefully-curated master bedroom designs come in a variety of styles, colour schemes and decor ideas - all of which can be customised to your taste. Whether you’re looking for a contemporary style or a room with rustic sensibilities, we’ve got all the bedroom interior design inspiration you’ll need to create a space that reflects your personality and taste. Take your pick from these trending designs and start your bedroom renovation journey today with Livspace.
          </p>
        </div>
      </div>

      {/* Kitchen Grid Display */}
      <div className="Kitchen-comp-grids-display">
        <div className="Kitchen-comp-gtc">
          {BedroomCompData.map((BedroomCompData) => (
            <div className="Kitchen-Comp-Grids" key={BedroomCompData.id}>
               <Link to={BedroomCompData.path}>
               <img src={BedroomCompData.image} alt="Design" />
               </Link>


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


      {/* <div className="faqs-container-ThreeComp">
        <div className="FAQ-heading">
          <p>FAQ About Master Bedroom Designs</p>
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

            }}> 1)How Can I Decorate My Small Bedroom?</p>
            
            - Small bedroom designs have a charm of their own; with strategic organisation and well-thought-out interior design, your small bedroom can become a peaceful oasis. Here are some tips to decorate your small bedroom.
            Make your bed the focal point- Having a bed that stands out can liven up the entire room. Picking a bed that is a statement piece and piling up pillows and fluffy bedding would be a great decision.
            Pick lighter shades- With smaller spaces, the best thing to do is to have a simple bedroom interior design. Picking neutral or lighter shades like white, beige, blush, or sky blue would be the way to go.
            Add functional décor- To decorate your small bedroom, you must use the walls, floor, and ceiling to save space and add character to your room. Getting a table that can double as storage can save space and add pizzazz to your décor.      <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 2) How Can I Make My Bedroom Luxurious?</p>
            - We all love the taste of luxury at Livspace Design Ideas, we have all the inspiration you need to elevate your master bedroom to a luxury status.
            Hang some art- Adding some modern art pieces can bring a flare of luxury to your master bedroom while simultaneously breaking the monotony of the furniture.
            Add a rug- Adding a contrasting rug in front of your bed looks elegant and tasteful. This would add some colour and add texture to your interior design.
            Fluff up your pillows- The simplest yet most effective technique to make your room feels luxurious is to invest in good bedding, fluffy pillows, and comforting throws. This would make your bed feel like a luxury hotel.


            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 3) What are the 5 Must-Have Furniture in the Bedroom?</p>
            - What makes a master bedroom feel like one is the furniture that is placed in it. Here are 5 furniture pieces that are a must-have in your bedroom.
            The centrepiece: Your statement bed
            Bedside tables for easy storage
            Dresser with a mirror
            Wardrobe
            A chair or a couch for simple seating


            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 4) What are Some Budget Bedroom Design Ideas?</p>
            - Budget bedroom ideas not only help you save money but also gives you an opportunity to get creative with your decisions. Time and again we see that small changes can bring in aesthetically pleasing changes to a room. It all starts with the right ideas and inspirations. Some simple but effective ideas to design your bedroom on a budget are:
            Keep it minimalistic with clean, simple furniture options
            If possible opt for a simple single bed
            Make use of corners - place big furniture in corners
            Add mirrors for the illusion of a bigger space.
            For more space between the bed and the roof use a low bed
            Include photo frames and wall arts to personalize your room
            Layer up your bed - with cushions and throws
            Add a plant to two to give your room some life


            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 5)What are the Most Common Bedroom Interior Design Mistakes?</p>
            - Some bedroom interior design mistakes that are fairly common and can be avoided are:
            Not selecting a colour palette
            Going overboard with decor
            Not prioritising bedding

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
        <a href="#ThreeCompNavbar" >Go On Top</a>
      </div>

    </div>
  );
};

export default ThreeComp;
