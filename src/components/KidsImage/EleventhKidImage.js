import React from 'react'
import { Link } from 'react-router-dom'
import KidsImagesData from '../../utils/KidsImagesData'





const EleventhKidImage  = () => {
    return (
        <div className='secondKitchenContainer'>
            <div className='navbar-first-kitchen-image'>
                <Link to="/sixcomp"> Go Back to Kids Bedroom Design</Link>
            </div>


            <div className='heroFirstImage'>
                <div className='imageDiv'>
                    <img src={KidsImagesData [10].image} alt="Design" />
                </div>
                <div className='textDiv'>

                    <div>
                        <p className='pathofkitchenimage' style={{ fontSize: "13px", marginBottom: "30px" }}>home/DesignIdeas/KidsBedroomDesigns/ <span style={{ color: "red" }}>Classic Kids Bedroom Design with Queen Bed and Wardrobe

                        </span></p>
                        <p style={{
                            fontSize: "25px",
                            fontWeight: "600",
                            width: "420px"
                        }}>{KidsImagesData [10].name}</p>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginTop: "20px"

                            }}> {KidsImagesData [10].details}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"
                            marginTop: "20px"

                        }}> <span style={{ fontWeight: "600", color: "" }}>Style : </span> {KidsImagesData [10].style}</p>
                        <p style={{
                            fontSize: "18px",

                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{KidsImagesData [10].rdimensions}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Furniture Highlights : </span>{KidsImagesData [10].fhighlights}</p>
                        
                        <p style={{
                            fontSize: "18px",

                        }}> <span style={{ fontWeight: "600" }}>Room Highlights : </span>{KidsImagesData [10].righlights}</p>
                    </div>

                </div>
            </div>

            
            <div className='SecondKitgoNextbtn '>
                <Link to="/tenthkidimage"> <button className='arrow left'></button></Link>
            </div>
            <div className='SecondKitgoNextbtnRight '>
                <Link to="/twelvethkidimage"><button className='arrow right'></button></Link>
            </div>

        </div>
    )
}

export default EleventhKidImage;