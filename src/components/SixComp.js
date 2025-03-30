import React, { useState } from "react";
import { Link } from "react-router-dom";
import KidsData from "../utils/KidsData";
import Anchors from "./Anchors";

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


      {/* <div className="faqs-container-FiveComp">
        <div className="FAQ-heading">
          <p> FAQ About Kids Bedroom Designs </p>


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

            }}> 1) What Are the Essentials of a Kids Room Design? </p>

            -    Every kid's bedroom design is unique, but some essentials remain the same in all bedrooms. A comfortable bed Wardrobe Desk space Décor storage pieces Playing/Creative zone Do ensure the items added are kid-friendly and meet standard safety requirements.
           
          
            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 2) What Bed Design Should You Choose for Your Kids' Bedroom?</p>
 
            -  Making sure that your kids are getting a good night's sleep is super important and for that, having a comfortable bed is a necessity. Depending upon the needs of your child and the kid's bedroom design, you can choose a suitable bed from the below options: Single beds Bunk beds Beds with storage Car beds Bed with attached desk
           

            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 3) How To Choose the Right Kids Room Furniture?</p> 

          -  Selecting the right furniture for your kids' bedroom is definitely the most crucial aspect of the kids' bedroom design. You must assess the space you have and the furniture you definitely want to keep in the room like a bed, a wardrobe, desk and more. Multi-functional storage can be an excellent piece to keep in a kids' bedroom. Along with that, the furniture pieces must be child-friendly, age-appropriate, and of high quality.
         



            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 4) How To Ensure Kids Room Decor Is Child-friendly? </p>
            - 
            
            Having child-friendly room décor in the kids' bedroom ensures that your child remains safe while walking and playing in their room. You can make sure that the edges of all desks are curved, all furniture is of the appropriate height, there are ample storage options for their things so they aren't strewn across the floor. Additionally, you should use furniture and decor that are appropriate for kids, that are approved and meet quality standards.

            <hr />
            <p style={{
              fontWeight: "600",
              color: "red"

            }}> 5) How To Design a Kids Bedroom for Two Kids? </p>
            -  
            
            If your kids are sharing a room, you must incorporate both of their interests in the kids' bedroom design while also maintaining the functionality of the space. You can have a bunk bed system to make the most of the smaller bedroom. If the kids' bedroom has enough space for two single beds, that can be a good choice too. In this layout, the kids can have their side of the wall painted; however, they like to let their individuality shine through.
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
        <a href="#SixCompNavbar" >Go On Top</a>
      </div>

    </div>
  );
};

export default SixComp;
