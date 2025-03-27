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
          <p style={{ fontSize: "40px" }}>Your dream home in 5 steps!</p>
        </div>
        <div className="headingHowitWorks">
          <p style={{ fontSize: "20px", marginTop: "-90px" }}>
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


      <div className="secondPageofHowitWorks">

        <div className="firstBoxofHow">

          <div className="imageLeft">

          </div>

          <div className="TextLeft">
            <p style={{
              fontSize: "35px",
              marginLeft: "15px"

            }}>Meet your designer</p>
            <p style={{
              fontSize: "25px",
              marginLeft: "30px",
              marginTop: "20px"

            }} > <span>&#9679;</span> It all begins with a form</p>
            <p style={{
              fontSize: "18px",
              marginLeft: "30px",
              marginTop: "5px"

            }} >Let's get acquainted. The more we learn about you, the better we can design your home.</p>


            <p style={{
              fontSize: "25px",
              marginLeft: "30px",
              marginTop: "20px"

            }} > <span>&#9679;</span> Get free consultation</p>
            <p style={{
              fontSize: "18px",
              marginLeft: "30px",
              marginTop: "5px"

            }} >Talk to your designer and get personalised designs and quote for your dream home.</p>
          </div>

        </div>


        {/* Second Box */}
        <div className="firstBoxofHow">

          <div className="imageLeft2">

          </div>

          <div className="TextLeft">
            <p style={{
              fontSize: "35px",
              marginLeft: "15px"

            }}>Book Livspace</p>
            <p style={{
              fontSize: "25px",
              marginLeft: "30px",
              marginTop: "20px",


            }} > <span>&#9679;</span> Pay the booking amount to seal the deal <span className="spanOfMilestone"
            >MILESTONE</span>
            </p>
            <p style={{
              fontSize: "18px",
              marginLeft: "30px",
              marginTop: "5px"

            }} >Once you're happy with what we've proposed, pay 10% of the final quote or Rs.25000 (whichever is higher) to book us. </p>


            <p style={{
              fontSize: "25px",
              marginLeft: "30px",
              marginTop: "20px"

            }} > <span>&#9679;</span> Finalise your home design</p>
            <p style={{
              fontSize: "18px",
              marginLeft: "30px",
              marginTop: "5px"

            }} >It's time to deep dive into the nitty-gritties & pick your favorite materials, finishes, etc. Interim payments will be requested based on project scope, value, and timelines during the booking and design phase. </p>
          </div>

        </div>


        {/* Third box */}

        <div className="firstBoxofHow">

          <div className="imageLeft3">

          </div>

          <div className="TextLeft">
            <p style={{
              fontSize: "35px",
              marginLeft: "15px"

            }}>Place the order</p>
            <p style={{
              fontSize: "25px",
              marginLeft: "30px",
              marginTop: "20px"

            }} > <span>&#9679;</span>
              Confirm your order with 50% payment   <span className="spanOfMilestone"
              >MILESTONE</span>

            </p>
            <p style={{
              fontSize: "18px",
              marginLeft: "30px",
              marginTop: "5px"

            }} >Finalise the design by making a cumulative 50% payment, and your project is now off to a good start.</p>


            <p style={{
              fontSize: "25px",
              marginLeft: "30px",
              marginTop: "20px"

            }} > <span>&#9679;</span> Work commences</p>
            <p style={{
              fontSize: "18px",
              marginLeft: "30px",
              marginTop: "5px"

            }} >Civil work begins on site. Keep a tab on your project status on 'My Account'. </p>
          </div>

        </div>

        <div className="HalfWayBlock">

          <div className="textTick"> <span>&#10004;</span>
            You're half way there. Your orders are raised! </div>
        </div>


        <div className="firstBoxofHow">

          <div className="imageLeft4">

          </div>

          <div className="TextLeft">
            <p style={{
              fontSize: "35px",
              marginLeft: "15px"

            }}>Final installations</p>
            <p style={{
              fontSize: "25px",
              marginLeft: "30px",
              marginTop: "20px"

            }} > <span>&#9679;</span>
              Pay 100% at intimation of material dispatch  <span className="spanOfMilestone"
              >MILESTONE</span>

            </p>
            <p style={{
              fontSize: "18px",
              marginLeft: "30px",
              marginTop: "5px"

            }} >Once the materials are ready for dispatch, you'll be intimated. Make the balance payment and we'll head to the last leg of your project. </p>


            <p style={{
              fontSize: "25px",
              marginLeft: "30px",
              marginTop: "20px"

            }} > <span>&#9679;</span> Installation</p>
            <p style={{
              fontSize: "18px",
              marginLeft: "30px",
              marginTop: "5px"

            }} >Orders get delivered on-site and installation happens as per design </p>
          </div>

        </div>

        <div className="HalfWayBlock">

          <div className="textTick"> <span>&#10004;</span>

            Hurrah! Complete payment has been made!</div>
        </div>

        <div className="firstBoxofHow">

          <div className="imageLeft5">

          </div>

          <div className="TextLeft">
            <p style={{
              fontSize: "35px",
              marginLeft: "15px"

            }}>Move in!</p>
            <p style={{
              fontSize: "25px",
              marginLeft: "30px",
              marginTop: "20px",


            }} > <span></span> Your dream home is now a reality! It's time to make new memories! Do avail the free professional photoshoot session of your #Vastuinteriors.
            </p>

          </div>

        </div>


        <div className="thirdPageOfHow">


          <div className="table-container">
            <p
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: "#474444",
              }}
            >
              Understand your order types
            </p>
            <p
              style={{
                width: "700px",
                marginTop: "20px",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              We know our payments can seem complex. But they're really not. We've
              staggered them through your home interiors journey, so that you make
              small payments depending on how your project has progressed.
            </p>
            <table
              style={{
                marginTop: "30px",
                borderCollapse: "collapse",
                width: "80%",
                textAlign: "center",
              }}
            >
              <thead>
                <tr>
                  <th>Order type</th>
                  <th>Overview of work involved</th>
                  <th>Execution milestone (Make 100% payment)</th>
                  <th>Handover</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Site Work</td>
                  <td>Civil & MEP (Mechanical, Electrical & Plumbing)</td>
                  <td>Before execution begins</td>
                  <td>At site completion</td>
                </tr>
                <tr>
                  <td>Custom Furniture</td>
                  <td>Factory-made furniture pieces</td>
                  <td>Before manufacturing starts</td>
                  <td>Upon delivery to the site</td>
                </tr>
                <tr>
                  <td>Modular Components</td>
                  <td>Kitchen, wardrobes, storage units</td>
                  <td>Before production begins</td>
                  <td>At installation completion</td>
                </tr>
                <tr>
                  <td>Loose Furniture</td>
                  <td>Chairs, tables, sofas, decor</td>
                  <td>Before procurement</td>
                  <td>On delivery</td>
                </tr>
                <tr>
                  <td>Final Touches</td>
                  <td>Paint, wallpapers, accessories</td>
                  <td>Before execution</td>
                  <td>At project handover</td>
                </tr>
              </tbody>
            </table>


          </div>



          <div className="theteamcontainer">
            <div className="teamTitle">
              <p style={{
                fontSize: "40px"
              }}>The Team</p>
              <p style={{
                fontSize: "25px"
              }}>Get to know the team that'll be with you every step of the way.</p>
            </div>


            <div className="teamGridDisplay">
              <div className="teamDivGTC">
                {
                  HowItWorksGridData.map((resHowitWorks) => (
                    <div className="teamBoxes">
                      <img src={resHowitWorks.image} />
                      <p style={{
                        fontSize: "25px",

                      }}>{resHowitWorks.titleText}</p>
                      <p style={{
                        textAlign: "center"
                      }}>{resHowitWorks.text}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>



          <div className="downFrom">
            <div className="ImagePartofForm ">

            </div>
            <div className="ActualFormOfRight">

              <form className="form2">
                <p style={{
                  fontSize: "30px",
                  width: "230px",
                  textAlign: "center",
                  color: "white"
                }}>
                  Designs for Every Budget
                </p>
                <p style={{
                  fontSize: "18px",
                  width: "330px",
                  textAlign: "center",
                  color: "white"
                }}>Get your dream home today. Let our experts help you</p>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Email id"></input>
                <input type="text" placeholder="Mobile Number"></input>
                <input style={{
                  height: "100px"
                }} type="text" placeholder="Property Name"></input>
                <button onClick={() => {
                  setSubmit("Submitting...")
                  setTimeout(() => {
                    setSubmit("Submit");
                  }, 500)
                }}>{submit}</button>



                <p style={{
                  fontSize: "15px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  width: "320px",
                  textAlign: "center"
                }}>By submitting this form, you agree to the <span style={{ color: "#ff5488" }} className="privateClass">privacy policy </span>& <span style={{ color: "#ff5488" }} className="privateClass">terms and conditions</span></p>
              </form>

            </div>
          </div>

          <div>
            {<Footer />}
          </div>


        </div>
      </div>

    </div>
  );
}
export default HowItWorks;