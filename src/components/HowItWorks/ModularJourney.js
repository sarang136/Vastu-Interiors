import React, { useState } from 'react'
import Anchors from '../Anchors'
import SecondNavbarForConsult from '../SecondNavbarForConsult'
import { Link } from 'react-router-dom'
import ModularJourneyData from '../../utils/ModularJourneyData'
import Footer from '../Footer'

const ModularJourney = () => {
  const [activeSection, setActiveSection] = useState("exp"); // Default: Exp section
  return (
    <div className='Modular-container'>
      {<Anchors />}


      <div className='hero-Modular'>
        <p id='forStyling1'>Crafting Modular Designs</p>
        <p id='forStyling2'>A journey through our revolutionary design-to-intallation process</p>

        <div className='modularBtn'>
          <Link to={"/consultus"}><button>Getstarted</button></Link>
        </div>
      </div>



      <div className='secondPageofModular'>
        <p>Something big that changes an industry happens once in a lifetime. Here you get a front seat to how Livspace has disrupted modular interiors manufacturing – automating the entire process from design to installation, bringing you quality modular solutions built with zero errors.</p>
      </div>



      <div className='thirdPageOfModular'>
        <div className='Text-for-div '>
          <p >India’s only automated modular design to manufacturing to installation process</p>
        </div>


        <div className='ThreeImagesInDisplay'>
          <div className='ThreeImagesinGrid'>
            {
              ModularJourneyData.map((resOfModular) => (
                <div className='ThreeImages'>
                  <img src={resOfModular.image} />
                  <p style={{
                    fontSize: "20px",
                    marginTop: "10px"
                  }}>{resOfModular.titleText}</p>
                  <p style={{
                    width: "230px",
                    textAlign: "center"
                  }}>{resOfModular.text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>




      <div className='fourthPageOfModular'>
        <div className='pehlaBox'>
          <div className='vedioBoxy boxy'>
            <video
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={`${process.env.PUBLIC_URL}/Images/durabild.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='textBoxy boxy'>
            <p style={{ fontSize: "20px", color: "gray" }}>What sets DuraBuild apart</p>
            <p><span>● </span> Advance connector mechanism for robust cabinet construction.</p>
            <p><span>● </span> Chipboard screws with PVC sockets ensure durability.</p>
            <p><span>● </span> Soft-closing hinges reduce vibrations and extend cabinet life.</p>
            <p><span>● </span> PVC legs for increased load bearing capacity (up to 350kg).</p>
            <p><span>● </span> Designed with gaps from walls to prevent transfer of dampness.</p>
          </div>
        </div>

<hr></hr>

        <div className='dusraBox'>
          <div className='textDursaBox boxy'>
            <p id='temp14'>Warranty built upon confidence</p>
            <p id='temp15'>Our modular products come with a 10-year warranty³ because of the confidence we have in our DuraBuild™ Cabinets. What are DuraBuild™ Cabinets? To Livspace, they are like the kids we are very proud of. The result of extensive R&D, they are the real heroes of our modular solutions offering unparalleled strength and durability.</p>
          </div>
          <div className='ImageDusraBox boxy'>
            <img src='https://images.livspace-cdn.com/w:164/h:164/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/design-to-installtion-1616405714-HYWaQ/warranty-confidence-1616420841-sCLwo/warranty-confidence-v2-d-1624541291-F9GjA.png' />
          </div>
        </div>
      </div>



      <div className='fifthPageOfModular'>
        <div className='headindPartofModular'>
          <p id='temp16'>Tested to be the best</p>
          <p id='temp17'>A lot of our success in modular strength hinges on testing our cabinets. Completely assembled cabinets are mercilessly subject to severe wear and tear as per European standards at independent⁴ labs. Conquering these tests, our cabinets prove themselves and earn the title – DuraBuild.</p>
        </div>


        <div className="buttons">
          <button
            onClick={() => setActiveSection("exp")}
            className={activeSection === "exp" ? "active" : ""}
          >
            Drawer Cyclic Test
          </button>
          <button
            onClick={() => setActiveSection("edu")}
            className={activeSection === "edu" ? "active" : ""}
          >
           Vertical Force Test
          </button>
          <button
            onClick={() => setActiveSection("projects")}
            className={activeSection === "projects" ? "active" : ""}
          >
           Drawer Cyclic Test
          </button>

        </div>
        <span style={{ width: "100%", border: "1px solid gray" }}></span>


        <div className="content">
          {activeSection === "exp" && (
            <div className="section">
              <div className="FifthPageImageBox">
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={`${process.env.PUBLIC_URL}/Images/drawer.mp4`} type="video/mp4" />

                </video>
              </div>
              <div className="FifthPageTextBox">
                <p id='temp18' >Drawer Cyclic Test</p>
                <p>Ensures extended life for your cabinet drawers.</p>
              </div>
            </div>
          )}





          {activeSection === "edu" && <div className="section">
            <div className="FifthPageImageBox">
              <video
                width="100%"
                height="auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={`${process.env.PUBLIC_URL}/Images/shutter.mp4`} type="video/mp4" />

              </video>
            </div>
            <div className="FifthPageTextBox">
              <p id='temp18'>Shutter Cyclic Test</p>
              <p>Ensures long life for your shutters.</p>
            </div></div>}






          {activeSection === "projects" && <div className="section">  <div className="FifthPageImageBox">
            <video
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={`${process.env.PUBLIC_URL}/Images/verical.mp4`} type="video/mp4" />

            </video>
          </div>
            <div className="FifthPageTextBox">
              <p id='temp18'>Vertical Force Test</p>
              <p>Ensures superior hinge quality and avoids accidents.</p>
            </div> </div>}
        </div>

      </div>

      <div>
        <Footer />
      </div>
    </div>




  )
}

export default ModularJourney