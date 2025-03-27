
import React from 'react'
import { Link } from 'react-router-dom'
import BedroomImagesData from '../../utils/BedroomImagesData'




const NinthBedroomImage = () => {
    return (
        <div className='secondKitchenContainer'>
            <div className='navbar-first-kitchen-image'>
                <Link to="/threecomp"> Go Back to Bedroom Designs</Link>
            </div>




            <div className='heroFirstImage'>
                <div className='imageDiv'>
                    <img src={BedroomImagesData[8].image} alt="Design" />
                </div>
                <div className='textDiv'>

                    <div>
                        <p className='pathofkitchenimage' style={{ fontSize: "13px", marginBottom: "30px" }}>home/DesignIdeas/MasterBedroomDesigns/ <span style={{ color: "red" }}>Contemporary Master Bedroom Design with Cream Fabricated Wall Panel
 </span></p>
                        <p style={{
                            fontSize: "25px",
                            fontWeight: "600",
                            width: "420px"
                        }}>{BedroomImagesData[8].name}</p>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginTop: "20px"

                            }}> {BedroomImagesData[8].details}</p>
                
                        <p style={{
                            fontSize: "18px",

                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{BedroomImagesData[8].roomD}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Style : </span>{BedroomImagesData[8].style}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Furniture Highlights: </span>{BedroomImagesData[8].fhighlights}</p>
                        <p style={{
                            fontSize: "18px",

                        }}> <span style={{ fontWeight: "600" }}>Room Highlights : </span>{BedroomImagesData[8].rhighlights}</p>
                    </div>

                </div>
            </div>

          
            <div className='SecondKitgoNextbtn '>
                <Link to="/eightbedroomimage"><button className='arrow left'></button></Link>
            </div>
            <div className='SecondKitgoNextbtnRight '>
                <Link to="/tenthbedroomimage"><button className='arrow right'></button></Link>
            </div>

        </div>
    )
}

    export default NinthBedroomImage;