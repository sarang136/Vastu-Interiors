import React from 'react'
import { Link } from 'react-router-dom'
import FirstKitchenImageData from '../utils/FirstKitchenImageData'
import Footer from './Footer'




const SecondKitchenImage = () => {
  return (
    <div className='secondKitchenContainer'>
      <div className='navbar-first-kitchen-image'>
        <Link to="/oneComp"> Go Back to Kitchen Designs</Link>
      </div>




      <div className='heroFirstImage'>
        <div className='imageDiv'>
          <img src={FirstKitchenImageData[1].image} alt="Design" />
        </div>
        <div className='arrowTags'>
          {/* <Link ><p><span></span></p></Link> */}
          <Link to={"/firstkitchenimage"}><p>&#8592;<span></span> Previous Image</p></Link>
          <Link to={"/thirdkitchenimage"}><p>Next Image &#8594;</p></Link>
        </div>
        <div className='textDiv'>

          <div>
            <p className='pathofkitchenimage' >home/DesignIdeas/KitchenDesigns/ <span style={{ color: "red" }}>L-Shaped Minimalist Kitchen Design with Green Suede Finish

            </span></p>
            <p id='temp11'>{FirstKitchenImageData[1].name}</p>
            <p id='temp12'> {FirstKitchenImageData[1].details}</p>
            <p id='temp13'> <span style={{ fontWeight: "600", color: "" }}>Layout : </span> {FirstKitchenImageData[1].layout}</p>
            <p id='temp13'> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{FirstKitchenImageData[1].roomD}</p>
            <p id='temp13'> <span style={{ fontWeight: "600" }}>Style : </span>{FirstKitchenImageData[1].style}</p>
            <p id='temp13'> <span style={{ fontWeight: "600" }}>Color : </span>{FirstKitchenImageData[1].color}</p>
            <p id='temp13'> <span style={{ fontWeight: "600" }}>Special Features : </span>{FirstKitchenImageData[1].splFeatures}</p>
          </div>
          <div className='arrowBtns'>
            <div className='SecondKitgoNextbtn '>
              <Link to="/firstkitchenimage"><p>Previous</p></Link>
            </div>
            <div className='SecondKitgoNextbtnRight '>
              <Link to="/thirdkitchenimage"><p>Next</p></Link>
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

export default SecondKitchenImage