import React from 'react'
import { Link } from 'react-router-dom'
import LivingImagesData from '../../utils/LivingImagesData'





const FifthLivingImage = () => {
    return (
        <div className='secondKitchenContainer'>
            <div className='navbar-first-kitchen-image'>
                <Link to="/twoComp"> Go Back to Living Room Designs</Link>
            </div>




            <div className='heroFirstImage'>
                <div className='imageDiv'>
                    <img src={LivingImagesData [4].image} alt="Design" />
                </div>
                <div className='textDiv'>

                    <div>
                        <p className='pathofkitchenimage' style={{ fontSize: "13px", marginBottom: "30px" }}>home/DesignIdeas/LivingRoomDesigns/ <span style={{ color: "red" }}>Contemporary Living Room Design with White Sofas and Black Coffee Table
                        </span></p>
                        <p style={{
                            fontSize: "25px",
                            fontWeight: "600",
                            width: "420px"
                        }}>{LivingImagesData [4].name}</p>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginTop: "20px"

                            }}> {LivingImagesData [4].details}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"
                            marginTop: "20px"

                        }}> <span style={{ fontWeight: "600", color: "" }}>Layout : </span> {LivingImagesData [4].layout}</p>
                        <p style={{
                            fontSize: "18px",

                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{LivingImagesData [4].roomD}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Style : </span>{LivingImagesData [4].FurnitureHighlights}</p>
                       
                        <p style={{
                            fontSize: "18px",

                        }}> <span style={{ fontWeight: "600" }}>Special Features : </span>{LivingImagesData [4].RoomHighlights}</p>
                    </div>

                </div>
            </div>

            
            <div className='SecondKitgoNextbtn '>
                <Link to="/fourthlivingimage"> <button className='arrow left'></button></Link>
            </div>
            <div className='SecondKitgoNextbtnRight '>
                <Link to="/sixthlivingimage"><button className='arrow right'></button></Link>
            </div>

        </div>
    )
}

export default FifthLivingImage;