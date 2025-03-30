import React from 'react'
import { Link } from 'react-router-dom'
import AboutUsMore from './AboutUsMore'
import NumbersTalking from './NumbersTalking'
import Footer from './Footer'
import Anchors from './Anchors'

const AboutUs = () => {
    return (
        <div className='ab-main-container'>
            <Anchors/>
            <section id='ab-container'>
                

                <div className='Ab-hero'>
                    <p>View More</p>
                    <p>About Us...</p>
                </div>
            </section>




            <div>
                <AboutUsMore />
            </div>
            <div>
                <NumbersTalking/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>

    )

}

export default AboutUs
