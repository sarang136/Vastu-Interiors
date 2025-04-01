import React, { useState } from 'react'
import Anchors from '../Anchors'
import OfferingData from './OfferingData'
import Footer from '../Footer';

const Offering = () => {
  const [Mona, SetMona] = useState("Booking");


  return (
    <div className='offering-container'>
      <Anchors />


      <div className='firstPageoffer'>
        <p id='temp27'>Dream Interiors Made Possible</p>
        <div className='btnn'><button>Book Free Consulatation</button></div>
      </div>


      <div className='secondPageOffer'>
        <p id='temp28'>The complete home interiors experience</p>
        <p id='temp29'>No more dreaming about your interiors. Livspace Vesta brings together award-winning designers, service partners and brands, to help you take your home interiors from dream to reality.</p>
      </div>


      <div className='thirdPageOffer'>
        <p id='temp28'>What We Offer</p>
        <div className='BoxesOfferContainer'>
          {

            OfferingData.map((resOffer) => (

              <div className='BoxesOffer'>
                <img src={resOffer.image} />
                <p id='temp30'>{resOffer.name}</p>
                <p id='temp31'>{resOffer.des}</p>
              </div>
            ))
          }
        </div>
      </div>



      <div className='fourthPageContainer'>

        <p id='temp36'>Your journey in a snapshot</p>
        <p id='temp37'>At Livspace, we make setting up your home a process as comfortable as living in it.</p>

        <div className='fourthPageOffer'>


          <div className='buttonsOffer'>
            <button onClick={() => SetMona("Booking")}>① 	 Booking</button>
            <button onClick={() => SetMona("Design Phase")}> ② 	Design Phase</button>
            <button onClick={() => SetMona("Manufacturing & Installations")}>  ③ Manufacturing & Installations</button>
            <button onClick={() => SetMona("Move in")}>  ④ Move in</button>
          </div>


          <div className='contentOffer'>
            {Mona == "Booking" && <div className='section'>
              <div className='bookingSection'>
                <p id='temp32'>Booking</p>
                <p id='temp33'>Say hi to your designer and kick-start your dream with a design proposal.</p>

                <hr />
                <p id='temp34'>&#9679;Fill form</p>
                <p id='temp35'>Share your basic information and property details in a quiz.</p>
                <p id='temp34'>&#9679;Get a call</p>
                <p id='temp35'>A Livspace executive connects with you to understand your requirements better.</p>
                <p id='temp34'>&#9679;Share your floor plan</p>
                <p id='temp35'>We match you to a Livspace designer based on your requirements.</p>
                <p id='temp34'>&#9679;Design proposal</p>
                <p id='temp35'>A design proposal and a tentative quote are created based on your budget.</p>
                <p id='temp34'>&#9679;Book with us</p>
                <p id='temp35'>You pay 10% or Rs.25,000 (whichever is higher) to book with Livspace</p>

              </div>

            </div>}
            {Mona == "Design Phase" && <div className='section'>
              <div className='bookingSection'>
                <p id='temp32'>Design Phase</p>
                <p id='temp33'>Site measurements, material selection and sorting all the nitty-gritty.</p>

                <hr />
                <p id='temp34'>&#9679;Site measurement</p>
                <p id='temp35'>A draftsperson visits your premises to take site measurements and photographs.</p>
                <p id='temp34'>&#9679;Design meeting 1</p>
                <p id='temp35'>Finalise your layout plan including the sizes of various units, their locations etc.</p>
                <p id='temp34'>&#9679;Design meeting 2</p>
                <p id='temp35'>Finalise your modules and pick your materials to receive a tentative quote</p>
                <p id='temp34'>&#9679;Design meeting 3</p>
                <p id='temp35'>Finalise materials, finishes, fittings and appliances to receive a revised quote.</p>
                <p id='temp34'>&#9679;Order approval</p>
                <p id='temp35'>Based on your feedback, revised drawings and a final quote are presented.</p>

              </div>
            </div>}
            {Mona == "Manufacturing & Installations" && <div className='section'>
              
              <div className='bookingSection'>
                <p id='temp32'>Manufacturing & Installation</p>
                <p id='temp33'>It’s magic time! Your dream interiors start coming together.</p>

                <hr />
                <p id='temp34'>&#9679;Site kick-off</p>
                <p id='temp35'>Connect with your designer and operations lead at the site.</p>
                <p id='temp34'>&#9679;Track progress</p>
                <p id='temp35'>Get a project schedule with key milestones and weekly progress reports on mail.</p>
                <p id='temp34'>&#9679;Manufacturing starts</p>
                <p id='temp35'>Your modular products are fabricated with precision-engineering.</p>
                <p id='temp34'>&#9679;You pay the remaining 50%**</p>
                <p id='temp35'>Your designer raises a final payment request when 50% work is done</p>
                <p id='temp34'>&#9679;Modular installation</p>
                <p id='temp35'>Modular products are delivered and installed at your property.</p>

              </div>
              </div>}
            {Mona == "Move in" && <div className='section'>
              
              <div className='bookingSection'>
                <p id='temp32'>Move-in</p>
                <p id='temp33'>Move into your new home and get ready to create memories for life.</p>

                <hr />
                <p id='temp34'>&#9679;Warranty</p>
                <p id='temp35'>Download your invoice from Livspace Hub and keep it safe to future warranties.</p>
                <p id='temp34'>&#9679;After-sales</p>
                <p id='temp35'>You enjoy the freedom of after-sales requests for the entire period of warranty.</p>
                <p id='temp34'>&#9679;Easy Invoice Access</p>
                <p id='temp35'>Quickly get your invoice anytime for hassle-free claims.</p>
                <p id='temp34'>&#9679;Dedicated Customer Support</p>
                <p id='temp35'>Reach out to our expert support team for any assistance related to your service</p>
                <p id='temp34'>&#9679; Genuine Spare Parts</p>
                <p id='temp35'>Enjoy the assurance of original spare parts for any repairs under warranty.</p>

              </div>
              </div>}
             
          </div>
         
        </div>
        <p id='temp38'>*Representative of the time required and dependent on the rate of progress your designer and you mutually establish. Installation is dependent on site conditions. | **Interim payments during design phase may be needed on the basis of project scope, value & timelines to place the order.</p>
      </div>
<Footer/>
    </div>
  )
}

export default Offering