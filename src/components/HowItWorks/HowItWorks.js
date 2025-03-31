import React, { useState } from "react";
import SecondNavbarForConsult from "../SecondNavbarForConsult";
import Anchors from "../Anchors";
import HowWorks from "./HowWorks";
import HowItWorksGridData from "../../utils/HowItWorksGridData";
import Footer from "../Footer";




const HowItWorks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submit, setSubmit] = useState("Submit Form")

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="howItWorks-container">
      <Anchors />

      <div className="heroHowItWorks">
        {/* <p>uhhj</p> */}
      </div>

      <div className="heroContent">
        <div className="headingHowitWorks">
          <span></span>
          <p id="temp26">Your dream home in 5 steps!</p>
        </div>
        <div className="headingHowitWorks">
          <p id="temp24">
            Looking to design your home interiors? Here's how you can get started.
          </p>
        </div>

        <div className="sixImagesOfHero">
          {Array.isArray(HowWorks) &&
            HowWorks.map((resHow, index) => (
              <div className="ImagesOfHero" key={index}>
                <img src={resHow.image} alt="Step" />
                <p>{resHow.text}</p>
              </div>
            ))}
        </div>

        <div className="btnOfHero">
          <button onClick={toggleForm}>START YOUR PROJECT NOW</button>
        </div>
      </div>

      {isOpen && (
        <div className="overlay" onClick={toggleForm}>
          <div className="form-container form" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={toggleForm}>
              &times;
            </span>

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

          </div>
        </div>
      )}


      <div className="secondPageHow">
        <div className="child-divs">
          <div className="img-div">
            <img src="https://images.livspace-cdn.com/w:1920/plain/https://d3ai42rl8fy79o.cloudfront.net/galactus/templates/HIW_desktop_step_one_v1_1.jpg.1589200424956"></img>
          </div>
          <div className="txt-div">
            <p id="temp21">Meet your designer</p>
            <p id="temp22">&#9679;It all begins with a form</p>
            <p id="temp23">Let's get acquainted. The more we learn about you, the better we can design your home.</p>

            <p id="temp22">&#9679;Get free consultation</p>
            <p id="temp23">Talk to your designer and get personalized designs and a quote for your dream home, ensuring elegance, comfort, functionality.</p>
          </div>
        </div>

        <div className="child-divs">
          <div className="img-div">
            <img src="https://images.livspace-cdn.com/w:1920/plain/https://d3ai42rl8fy79o.cloudfront.net/galactus/templates/HIW_desktop_step_two_v1_1.jpg.1589200686140"></img>
          </div>
          <div className="txt-div">
            <p id="temp21">Book Livspace</p>
            <p id="temp22">&#9679;
              Pay the booking amount to seal the deal</p>
            <p id="temp23">Once you're happy with what we've proposed, pay 10% of the final quote or Rs.25000.</p>
            <p id="temp22">&#9679;
              Finalise your home design</p>
            <p id="temp23"> Time to deep dive into the nitty-gritties and pick your favorite materials, finishes, textures, colors, patterns, fabrics, furniture.</p>
          </div>
        </div>


        <div className="child-divs">
          <div className="img-div">
            <img src="https://images.livspace-cdn.com/w:1920/plain/https://d3ai42rl8fy79o.cloudfront.net/galactus/templates/HIW_desktop_step_three_v1_1.jpg.1589200773045"></img>
          </div>
          <div className="txt-div">
            <p id="temp21">Place the order
            </p>
            <p id="temp22">&#9679;
              Confirm your order with 50% payment
            </p>
            <p id="temp23">Finalise the design by making a cumulative 50% payment</p>
            <p id="temp22">&#9679;
              Work commences</p>
            <p id="temp23">Civil work begins. Stay updated, track progress, review timelines, manage documents & monitor project status conveniently.</p>
          </div>
        </div>

        <div className="mid-div">
          <p id="temp25"> &#10004;You're half way there. Your orders are raised!</p>
        </div>

        <div className="child-divs">
          <div className="img-div">
            <img src="https://images.livspace-cdn.com/w:1920/plain/https://d3ai42rl8fy79o.cloudfront.net/galactus/templates/HIW_desktop_step_four_v1_1.jpg.1589200866650"></img>
          </div>
          <div className="txt-div">
            <p id="temp21">Final installations
            </p>
            <p id="temp22">&#9679;
              Pay 100% at intimation of material dispatch
            </p>
            <p id="temp23">Once the materials are ready for dispatch, you'll be intimated. Make the balance payment and we'll head to the last leg of your project.</p>
            <p id="temp22">&#9679;
              Installation</p>
            <p id="temp23">Orders get delivered on-site and installation happens as per design</p>
          </div>
        </div>

        <div className="mid-div">
          <p id="temp25"> &#10004;
            Hurrah! Complete payment has been made!</p>
        </div>

        <div className="child-divs">
          <div className="img-div">
            <img src="https://images.livspace-cdn.com/w:1920/plain/https://d3ai42rl8fy79o.cloudfront.net/galactus/templates/HIW_desktop_step_five_v1_1.jpg.1589200964847"></img>
          </div>
          <div className="txt-div">
            <p id="temp21"> Move in!
            </p>
            
            
            <p id="temp23">Your dream home is now a reality! It's time to make new memories! Do avail the free professional photoshoot session of your #VastuDreamHome.</p>
          </div>
        </div>

      </div>





      <Footer />
    </div>
  );
}
export default HowItWorks;