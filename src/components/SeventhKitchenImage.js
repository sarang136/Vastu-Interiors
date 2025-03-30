import React from 'react'
import { Link } from 'react-router-dom'
import FirstKitchenImageData from '../utils/FirstKitchenImageData'
import Footer from './Footer'




const SeventhKitchenImage = () => {
    return (
        <div className='secondKitchenContainer'>
            <div className='navbar-first-kitchen-image'>
                <Link to="/oneComp"> Go Back to Kitchen Designs</Link>
            </div>




            <div className='heroFirstImage'>
                <div className='imageDiv'>
                    <img src={FirstKitchenImageData[6].image} alt="Design" />
                </div>
                <div className='textDiv'>



                    <div className='arrowTags'>
                        {/* <Link ><p><span></span></p></Link> */}
                        <Link to={"/sixthkitchenimage"}><p>&#8592;<span></span> Previous Image</p></Link>
                        <Link to={"/eigthkitchenimage"}><p>Next Image &#8594;</p></Link>
                    </div>

                    <div className='fullTextDiv'>
                        <p className='pathofkitchenimage' >home/DesignIdeas/KitchenDesigns/ <span style={{ color: "red" }}>Modern L-Shaped Kitchen Design with Aqua Green and White Suede Finish </span></p>
                        <p id='temp11'>{FirstKitchenImageData[6].name}</p>
                        <p id='temp12'> {FirstKitchenImageData[6].details}</p>
                        <p id='temp13'> <span style={{ fontWeight: "600", color: "" }}>Layout : </span> {FirstKitchenImageData[6].layout}</p>
                        <p id='temp13'> <span style={{ fontWeight: "600" }}>Room Dimensions : </span>{FirstKitchenImageData[6].roomD}</p>
                        <p id='temp13'> <span style={{ fontWeight: "600" }}>Style : </span>{FirstKitchenImageData[6].style}</p>
                        <p id='temp13'> <span style={{ fontWeight: "600" }}>Color : </span>{FirstKitchenImageData[6].color}</p>
                        <p id='temp13'> <span style={{ fontWeight: "600" }}>Special Features : </span>{FirstKitchenImageData[6].splFeatures}</p>
                    </div>
                    <div className='arrowBtns'>
                        <div className='SecondKitgoNextbtn '>
                            <Link to="/sixthkitchenimage"><p>Previous</p></Link>
                        </div>
                        <div className='SecondKitgoNextbtnRight '>
                            <Link to="/eigthkitchenimage"><p>Next</p></Link>
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

export default SeventhKitchenImage;