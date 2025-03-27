import React from 'react'
import { Link } from 'react-router-dom'
import DiningImagesData from '../../utils/DiningImagesData' 

const SixthDinImage  = () => {
    return (
        <div className='secondKitchenContainer'>
            <div className='navbar-first-kitchen-image'>
                <Link to="/fivecomp"> Go Back to Dinning Room Designs</Link>
            </div>


            <div className='heroFirstImage'>
                <div className='imageDiv'>
                    <img src={DiningImagesData[5].image} alt="Design" />
                </div>
                <div className='textDiv'>

                    <div>
                        <p className='pathofkitchenimage' style={{ fontSize: "13px", marginBottom: "30px" }}>home/DesignIdeas/WardrobeDesigns/ <span style={{ color: "red" }}>Contemporary 8-Seater Dining Room Design with Wooden Table
                        </span></p>
                        <p style={{
                            fontSize: "25px",
                            fontWeight: "600",
                            width: "420px"
                        }}>{DiningImagesData[5].name}</p>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginTop: "20px"

                            }}> {DiningImagesData[5].details}</p>

                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"
                            marginTop: "20px"

                        }}> <span style={{ fontWeight: "600", color: "" }}> Dining Room Design Details: </span></p>


                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"
                            marginTop: "20px"

                        }}> <span style={{ fontWeight: "600", color: "" }}>Style : </span> {DiningImagesData[5].style}</p>
                        <p style={{
                            fontSize: "18px",

                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{DiningImagesData[5].rdimensions}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Furniture Highlights: </span>{DiningImagesData[5].fhighlights}</p>

                        <p style={{
                            fontSize: "18px",

                        }}> <span style={{ fontWeight: "600" }}>Room Highlightss: </span>{DiningImagesData[5].rhighlights}</p>

                        {/* <p style={{
                            fontSize: "18px",

                        }}> <span style={{ fontWeight: "600" }}>Design Benefits: </span>{DiningImagesData[0].designBenifits}</p> */}
                    </div>

                </div>
            </div>

  
            <div className='SecondKitgoNextbtn '>
                <Link to="/fifthdinimage"> <button className='arrow left'></button></Link>
            </div>
            <div className='SecondKitgoNextbtnRight '>
                <Link to="/seventhdinimage"><button className='arrow right'></button></Link>
            </div>

        </div>
    )
}

export default SixthDinImage;