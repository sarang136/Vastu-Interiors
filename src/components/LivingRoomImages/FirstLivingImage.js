import React from 'react'
import { Link } from 'react-router-dom'
import LivingImagesData from '../../utils/LivingImagesData'





const FirstLivingImage = () => {
    return (
        <div className='secondKitchenContainer'>
            <div className='navbar-first-kitchen-image'>
                <Link to="/twoComp"> Go Back to Living Room Designs</Link>
            </div>




            <div className='heroFirstImage'>
                <div className='imageDiv'>
                    <img src={LivingImagesData [0].image} alt="Design" />
                </div>
                <div className='textDiv'>

                    <div>
                        <p className='pathofkitchenimage' style={{ fontSize: "13px", marginBottom: "30px" }}>home/DesignIdeas/LivingRoomDesigns/ <span style={{ color: "red" }}>Classic Living Room Design with Beige Sofas and Leather Armchair</span></p>
                        <p style={{
                            fontSize: "25px",
                            fontWeight: "600",
                            width: "420px"
                        }}>{LivingImagesData [0].name}</p>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginTop: "20px"

                            }}> {LivingImagesData [0].details}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"
                            marginTop: "20px"

                        }}> <span style={{ fontWeight: "600", color: "" }}>Layout : </span> {LivingImagesData [0].layout}</p>
                        <p style={{
                            fontSize: "18px",

                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{LivingImagesData [0].roomD}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Style : </span>{LivingImagesData [0].FurnitureHighlights}</p>
                        
                        <p style={{
                            fontSize: "18px",

                        }}> <span style={{ fontWeight: "600" }}>Special Features : </span>{LivingImagesData [0].RoomHighlights}</p>
                    </div>

                </div>
            </div>

            
            {/* <div className='SecondKitgoNextbtn '>
                <Link to="/thirdkitchenimage"> <button className='arrow left'></button></Link>
            </div> */}
            <div className='SecondKitgoNextbtnRight '>
                <Link to="/secondlivingimage"><button className='arrow right'></button></Link>
            </div>

        </div>
    )
}

export default FirstLivingImage;