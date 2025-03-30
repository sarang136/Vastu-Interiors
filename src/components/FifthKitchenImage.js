import React from 'react'
import { Link } from 'react-router-dom'
import FirstKitchenImageData from '../utils/FirstKitchenImageData'
import Footer from './Footer'




const FifthKitchenImage = () => {
    return (
        <div className='secondKitchenContainer'>
            <div className='navbar-first-kitchen-image'>
                <Link to="/oneComp"> Go Back to Kitchen Designs</Link>
            </div>




            <div className='heroFirstImage'>
                <div className='imageDiv'>
                    <img src={FirstKitchenImageData[4].image} alt="Design" />
                </div>
                <div className='textDiv'>

                    <div className='arrowTags'>
                        {/* <Link ><p><span></span></p></Link> */}
                        <Link to={"/fourthkitchenimage"}><p>&#8592;<span></span> Previous Image</p></Link>
                        <Link to={"/sixthkitchenimage"}><p>Next Image &#8594;</p></Link>
                    </div>

                    <div className='fullTextDiv'>
                        <p id='pathofkitchenimage' style={{ fontSize: "13px", marginBottom: "30px" }}>home/DesignIdeas/KitchenDesigns/ <span style={{ color: "red" }}>U-Shaped Modern Kitchen Design with High Gloss Finish</span></p>
                        <p id='temp11'>{FirstKitchenImageData[4].name}</p>
                        <p id='temp12'> {FirstKitchenImageData[4].details}</p>
                        <p id='temp13'> <span style={{ fontWeight: "600", color: "" }}>Layout : </span> {FirstKitchenImageData[4].layout}</p>
                        <p id='temp13'> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{FirstKitchenImageData[4].roomD}</p>
                        <p id='temp13'> <span style={{ fontWeight: "600" }}>Style : </span>{FirstKitchenImageData[4].style}</p>
                        <p id='temp13's> <span style={{ fontWeight: "600" }}>Color : </span>{FirstKitchenImageData[4].color}</p>
                        <p id='temp13'> <span style={{ fontWeight: "600" }}>Special Features : </span>{FirstKitchenImageData[4].splFeatures}</p>
                    </div>
                    <div className='arrowBtns'>
                        <div className='SecondKitgoNextbtn '>
                            <Link to="/fourthkitchenimage"><p>Previous</p></Link>
                        </div>
                        <div className='SecondKitgoNextbtnRight '>
                            <Link to="/sixthkitchenimage"><p>Next</p></Link>
                        </div>
                    </div>
                </div>
            </div>

            {
                <Footer />
            }


        </div>
    )
}

export default FifthKitchenImage;