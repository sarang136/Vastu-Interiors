import React from 'react'
import { Link } from 'react-router-dom'
import BedroomImagesData from '../../utils/BedroomImagesData'




const FirstBedroomImage = () => {
    return (
        <div className='secondKitchenContainer'>
            <div className='navbar-first-kitchen-image'>
                <Link to="/threecomp"> Go Back to Bedroom Designs</Link>
            </div>




            <div className='heroFirstImage'>
                <div className='imageDiv'>
                    <img src={BedroomImagesData[0].image} alt="Design" />
                </div>
                <div className='textDiv'>

                    <div>
                        <p className='pathofkitchenimage' style={{ fontSize: "13px", marginBottom: "30px" }}>home/DesignIdeas/MasterBedroomDesigns/ <span style={{ color: "red" }}>Classic Master Bedroom Design with King Bed and Black Wooden Accents



                            </span></p>
                        <p style={{
                            fontSize: "25px",
                            fontWeight: "600",
                            width: "420px"
                        }}>{BedroomImagesData[0].name}</p>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginTop: "20px"

                            }}> {BedroomImagesData[0].details}</p>
                
                        <p style={{
                            fontSize: "18px",

                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{BedroomImagesData[0].roomD}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Style : </span>{BedroomImagesData[0].style}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Furniture Highlights: </span>{BedroomImagesData[0].fhighlights}</p>
                        <p style={{
                            fontSize: "18px",

                        }}> <span style={{ fontWeight: "600" }}>Room Highlights : </span>{BedroomImagesData[0].rhighlights}</p>
                    </div>

                </div>
            </div>

          
            {/* <div className='SecondKitgoNextbtn '>
                <Link to="/"><button className='arrow left'></button></Link>
            </div> */}
            <div className='SecondKitgoNextbtnRight '>
                <Link to="/secondbedroomimage"><button className='arrow right'></button></Link>
            </div>

        </div>
    )
}

export default FirstBedroomImage;