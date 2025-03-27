import React from 'react'
import { Link } from 'react-router-dom'
import WardrobeData from '../../utils/WardrobeData' 





const FirstWardImages = () => {
    return (
        <div className='secondKitchenContainer'>
            <div className='navbar-first-kitchen-image'>
                <Link to="/fourcomp"> Go Back to Wardrobe Designs</Link>
            </div>


            <div className='heroFirstImage'>
                <div className='imageDiv'>
                    <img src={WardrobeData[0].image} alt="Design" />
                </div>
                <div className='textDiv'>

                    <div>
                        <p className='pathofkitchenimage' style={{ fontSize: "13px", marginBottom: "30px" }}>home/DesignIdeas/WardrobeDesigns/ <span style={{ color: "red" }}>Contemporary 4-Door Swing Wardrobe Design in Marigold Yellow


                        </span></p>
                        <p style={{
                            fontSize: "25px",
                            fontWeight: "600",
                            width: "420px"
                        }}>{WardrobeData[0].name}</p>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginTop: "20px"

                            }}> {WardrobeData[0].details}</p>

                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"
                            marginTop: "20px"

                        }}> <span style={{ fontWeight: "600", color: "" }}> Wardrobe Design details </span></p>


                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"
                            marginTop: "20px"

                        }}> <span style={{ fontWeight: "600", color: "" }}>Type : </span> {WardrobeData[0].type}</p>
                        <p style={{
                            fontSize: "18px",

                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Door : </span>{WardrobeData[0].door}</p>
                        <p style={{
                            fontSize: "18px",
                            // fontWeight:"600"

                        }}> <span style={{ fontWeight: "600" }}>Wardrobe Dimension (WxDxH): </span>{WardrobeData[0].WardDimensions}</p>

                        <p style={{
                            fontSize: "18px",

                        }}> <span style={{ fontWeight: "600" }}>Style : </span>{WardrobeData[0].style}</p>

                        <p style={{
                            fontSize: "18px",

                        }}> <span style={{ fontWeight: "600" }}>Design Benefits: </span>{WardrobeData[0].designBenifits}</p>
                    </div>

                </div>
            </div>


            {/* <div className='SecondKitgoNextbtn '>
                <Link to="/eleventhlivingimage"> <button className='arrow left'></button></Link>
            </div> */}
            <div className='SecondKitgoNextbtnRight '>
                <Link to="/secondwardimage"><button className='arrow right'></button></Link>
            </div>

        </div>
    )
}

export default FirstWardImages;