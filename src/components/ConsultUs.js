import React, { useState, useEffect } from "react";
import Anchors from "./Anchors";
import ConsultData from "../utils/ConsultData";
import Footer from "./Footer";
import StayUpdatedData from "../utils/StayUpdatedData";


const ConsultUs = () => {
  
  const [submit, setSubmit] = useState("Submit Form")



  return (
    <div className="container-consult " id="firstPageOfConsultUs">

      <div className="containerWriteOff">
        {<Anchors />}
        <div className="NavbarForConsult">


        </div>

        <div className="page1consult">
          



          <div className="textToppage1">

            <div className="textleft">
              <p>Let's get started with your dream interiors
              </p>
            </div>


            <form className="form">
              <p style={{
                fontWeight: "500"
              }}>Talk to a Designer</p>
              <input type="text" name="name" placeholder="Name"></input>
              <input type="text" name="name" placeholder="Email-id"></input>
              <input type="text" name="name" placeholder="Phone number"></input>
              <input style={{
                height: "100px"
              }} type="text" placeholder=" Please Enter Property Name"></input>


              <button onClick={() => {
                setSubmit("Submitting...")
                setTimeout(() => {
                  setSubmit("Submit");
                }, 500)
              }}>{submit}</button>


              <p style={{
                fontSize: "15px",
                marginTop: "20px",
                marginLeft: "20px"
              }}>By submitting this form, you agree to the <span style={{ color: "red" }} className="privateClass">privacy policy </span>& <span style={{ color: "red" }} className="privateClass">terms and conditions</span></p>


              <check></check>
            </form>

          </div>


        </div>



        <div className="page2consult">
          <div className="text2consult">
            <h1 style={{
              fontSize: "40px"
            }}>Homes for every budget</h1>
            <p>Our interior designers work with you keeping in mind your requirements and budget</p>
          </div>



          <div className="imagesConsultDisplay">
            <div className="imagesConsultGrid">
              <div className="consultBoxesImage image1">
                <div className="pricingDiv">
                  <p>Starting at 3.57L*</p>
                </div>
                <div className="bhkDiv">
                  <p>2BHK</p>
                </div>
              </div>
              <div className="consultBoxesImage image2">
                <div className="pricingDiv">
                  <p>Starting at 3.57L*</p>
                </div>
                <div className="bhkDiv">
                  <p>2BHK</p>
                </div>
              </div>
              <div className="consultBoxesImage image3">
                <div className="pricingDiv">
                  <p>Starting at 3.57L*</p>
                </div>
                <div className="bhkDiv">
                  <p>2BHK</p>
                </div>
              </div>

            </div>
          </div>


          <p id="temp1">*The prices include only modular interiors for new homes.</p>
        </div>


        <div className="page3consult">
          <div className="page3text">
            <p id="temp2">We offer unparalleled services</p>
            <p id="temp3">Our interior designers work with you keeping in mind your requirements and budget</p>
          </div>




          <div className="page3Display">
            <div className="page3Grid">
              {
                ConsultData.map((res3) => (
                  <div className="page3Boxes">
                    <div className="image3Boxes"><img src={res3.image} alt="Design" /></div>
                    <div className="text2Boxes"><p >{res3.text}</p>
                    
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="constumService-container ">
          <div className="constumService-text">
            <p id="temp4">Customised services</p>
            <p id="temp5" >Can't find what you're looking for? We’ll design your home the way you like, keeping your needs and budget in mind.</p>


            <div className="consultServiceBtn">
              <a style={{
                textDecoration: "none"
              }} href="#firstPageOfConsultUs"><h3>Consult</h3></a>
            </div>
          </div>

          <div className="constumService-Image">
            <img src="https://images.livspace-cdn.com/w:1920/plain/https://d3ai42rl8fy79o.cloudfront.net/galactus/templates/cant-find_d.png.1597907275633"></img>
          </div>
        </div>



        <div className="stayUpdatedContainer">
          <p id="temp6">Stay updated with the latest design trends!</p>


          <div className="stayUpdatedDisplay">
            <div className="stayUpdatedGrid">
              {
                StayUpdatedData.map((updatedResult) => (
                  <div className="stayUpdatedBoxes">
                    <img src={updatedResult.image} alt="Design" />
                    <p style={{
                      width: "300px",
                      fontSize: "24px"
                    }}>{updatedResult.text}</p>
                    <p style={{
                      fontStyle: "italic",
                      color: "gray"
                    }}>{updatedResult.NameNdate}</p>
                  </div>
                ))
              }
            </div>
          </div>



        </div>


        <div>
          {<Footer />}
        </div>

      </div>










    </div>
  );
};

export default ConsultUs;
