import React from 'react'
import { Link } from 'react-router-dom'
import AboutUsMore from './AboutUsMore'
import NumbersTalking from './NumbersTalking'
import Footer from './Footer'

const AboutUs = () => {
    return (
        <div className='ab-main-container'>
            <section id='ab-container'>
                <div className='container'>
                    <div className='anchors'>
                        <div className='nothingDiv'>
                            <Link style={{ textDecoration: "none" }} to="/">Home</Link>
                            <Link style={{ textDecoration: "none" }} to="/about">About Us</Link>
                            <Link style={{ textDecoration: "none" }} to="/projects">Projects</Link>
                            <Link style={{ textDecoration: "none" }} to="/contact">Design Ideas</Link>
                        </div>
                    </div>
                </div>

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
