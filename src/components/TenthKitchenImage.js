import React from 'react'
import { Link } from 'react-router-dom'
import FirstKitchenImageData from '../utils/FirstKitchenImageData'
import Footer from './Footer'




const TenthKitchenImage = () => {
    return (
        <div className='secondKitchenContainer'>
            <div className='navbar-first-kitchen-image'>
                <Link to="/oneComp"> Go Back to Kitchen Designs</Link>
            </div>




            <div className='heroFirstImage'>
                <div className='imageDiv'>
                    <img src={FirstKitchenImageData[9].image} alt="Design" />
                </div>
                <div className='textDiv'>

                    <div>
                        <p className='pathofkitchenimage' style={{ fontSize: "13px", marginBottom: "30px" }}>home/DesignIdeas/KitchenDesigns/ <span style={{ color: "red" }}>U-Shaped Modern Kitchen Design with High Gloss Finish</span></p>
                        <p style={{
                            fontSize: "25px",
                            fontWeight: "600",
                            width: "420px"
                        }}>{FirstKitchenImageData[9].name}</p>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginTop: "20px"

                            }}> {FirstKitchenImageData[9].details}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"
                            marginTop: "20px"

                        }}> <span style={{ fontWeight: "600", color: "" }}>Layout : </span> {FirstKitchenImageData[9].layout}</p>
                        <p style={{
                            fontSize: "18px",

                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{FirstKitchenImageData[9].roomD}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Style : </span>{FirstKitchenImageData[9].style}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Color : </span>{FirstKitchenImageData[9].color}</p>
                        <p style={{
                            fontSize: "18px",

                        }}> <span style={{ fontWeight: "600" }}>Special Features : </span>{FirstKitchenImageData[9].splFeatures}</p>
                    </div>

                </div>
            </div>

            {
                <Footer />
            }
            <div className='SecondKitgoNextbtn '>
                <Link to="/ninthkitchenimage"><button className='arrow left'></button></Link>
            </div>
            <div className='SecondKitgoNextbtnRight '>
                <Link to="/eleventhkitchenimage"><button className='arrow right'></button></Link>
            </div>

        </div>
    )
}

export default TenthKitchenImage;