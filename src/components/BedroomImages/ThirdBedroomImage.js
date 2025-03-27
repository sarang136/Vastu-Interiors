import React from 'react'
import { Link } from 'react-router-dom'
import BedroomImagesData from '../../utils/BedroomImagesData'




const ThirdBedroomImage = () => {
    return (
        <div className='secondKitchenContainer'>
            <div className='navbar-first-kitchen-image'>
                <Link to="/threecomp"> Go Back to Bedroom Designs</Link>
            </div>




            <div className='heroFirstImage'>
                <div className='imageDiv'>
                    <img src={BedroomImagesData[2].image} alt="Design" />
                </div>
                <div className='textDiv'>

                    <div>
                        <p className='pathofkitchenimage' style={{ fontSize: "13px", marginBottom: "30px" }}>home/DesignIdeas/MasterBedroomDesigns/ <span style={{ color: "red" }}>Modern Master Bedroom Design with Light Grey Bed and Yellow Wall Accent


                            </span></p>
                        <p style={{
                            fontSize: "25px",
                            fontWeight: "600",
                            width: "420px"
                        }}>{BedroomImagesData[2].name}</p>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginTop: "20px"

                            }}> {BedroomImagesData[2].details}</p>
                
                        <p style={{
                            fontSize: "18px",

                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{BedroomImagesData[2].roomD}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Style : </span>{BedroomImagesData[2].style}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Furniture Highlights: </span>{BedroomImagesData[2].fhighlights}</p>
                        <p style={{
                            fontSize: "18px",

                        }}> <span style={{ fontWeight: "600" }}>Room Highlights : </span>{BedroomImagesData[2].rhighlights}</p>
                    </div>

                </div>
            </div>

          
            <div className='SecondKitgoNextbtn '>
                <Link to="/secondbedroomimage"><button className='arrow left'></button></Link>
            </div>
            <div className='SecondKitgoNextbtnRight '>
                <Link to="/fourthbedroomimage"><button className='arrow right'></button></Link>
            </div>

        </div>
    )
}

export default ThirdBedroomImage;