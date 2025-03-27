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
        <div className='textDiv'>

          <div>
            <p className='pathofkitchenimage' style={{ fontSize: "13px", marginBottom: "30px" }}>home/DesignIdeas/KitchenDesigns/ <span style={{ color: "red" }}>Straight Contemporary Kitchen Design with Berry Bunch High Gloss Laminate Finish</span></p>
            <p style={{
              fontSize: "25px",
              fontWeight: "600",
              width: "420px"
            }}>{FirstKitchenImageData[0].name}</p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginTop: "20px"

              }}> {FirstKitchenImageData[0].details}</p>
            <p style={{
              fontSize: "18px",
              // fontWeight:"600"
              marginTop: "20px"

            }}> <span style={{ fontWeight: "600", color: "" }}>Layout : </span> {FirstKitchenImageData[0].layout}</p>
            <p style={{
              fontSize: "18px",

              // fontWeight:"600"

            }}> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{FirstKitchenImageData[0].roomD}</p>
            <p style={{
              fontSize: "18px",
              // fontWeight:"600"

            }}> <span style={{ fontWeight: "600" }}>Style : </span>{FirstKitchenImageData[0].style}</p>
            <p style={{
              fontSize: "18px",
              // fontWeight:"600"

            }}> <span style={{ fontWeight: "600" }}>Color : </span>{FirstKitchenImageData[0].color}</p>
            <p style={{
              fontSize: "18px",

            }}> <span style={{ fontWeight: "600" }}>Special Features : </span>{FirstKitchenImageData[0].splFeatures}</p>
          </div>

        </div>
      </div>

      {
        <Footer />
      }
      <div className='FirstKitgoNextbtn '>
        <Link to="/secondkitchenimage"> <button className='arrow right'></button></Link>
      </div>
    </div>
  )
}

export default FirstKitchenImage