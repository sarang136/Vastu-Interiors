import React from 'react'
import { Link } from 'react-router-dom'
import FirstKitchenImageData from '../utils/FirstKitchenImageData'
import Footer from './Footer'




const FirstKitchenImage = () => {
  return (
    <div className='firstKitchenContainer'>
      <div className='navbar-first-kitchen-image'>
        <Link to="/oneComp">Go Back to Kitchen Designs </Link>
      </div>




      <div className='heroFirstImage'>
        <div className='imageDiv'>
          <img src={FirstKitchenImageData[0].image} alt="Design" />
        </div>
        <div className='arrowTags'>
          <Link ><p><span></span></p></Link>
          {/* <Link ><p>&#8592;<span></span> Previous Image</p></Link> */}
          <Link to={"/secondkitchenimage"}><p>Next Image &#8594;</p></Link>
        </div>
        <div className='textDiv'>

          <div>
            <p className='pathofkitchenimage' >home/DesignIdeas/KitchenDesigns/ <span style={{ color: "red" }}>Straight Contemporary Kitchen Design with Berry Bunch High Gloss Laminate Finish</span></p>
            <p id='temp11'>{FirstKitchenImageData[0].name}</p>
            <p id='temp12'
            > {FirstKitchenImageData[0].details}</p>
            <p id='temp13'> <span style={{ fontWeight: "600", color: "" }}>Layout : </span> {FirstKitchenImageData[0].layout}</p>
            <p id='temp13'> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{FirstKitchenImageData[0].roomD}</p>
            <p id='temp13'> <span style={{ fontWeight: "600" }}>Style : </span>{FirstKitchenImageData[0].style}</p>
            <p id='temp13'> <span style={{ fontWeight: "600" }}>Color : </span>{FirstKitchenImageData[0].color}</p>
            <p id='temp13'> <span style={{ fontWeight: "600" }}>Special Features : </span>{FirstKitchenImageData[0].splFeatures}</p>

          </div>
          <div className='arrowBtns'>
            <div className='FirstKitgoNextbtn '>
              {/* <Link to="/secondkitchenimage"><p>.</p></Link> */}
              <Link to="/secondkitchenimage"> <p>Next</p></Link>
            </div>
          </div>

        </div>
      </div>

      {
        <Footer />
      }

    </div>
  )
}

export default FirstKitchenImage