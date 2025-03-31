import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='about-footer'>
                <h1 id='temp19'>Contacts</h1>
                <hr></hr>
                <p id='temp19'>darshan Vihar, Behind Suzuki Showroom, Beed bypass road, Chhatrapati SambhajiNagar (Aurangabad)</p>
                <p id='temp19'>9665150750</p>
                <p id='temp19'>vastuinteriors@gmail.com</p>
                <p id='temp19'>© 2024 vastuinteriors.com All Rights Reserved</p>
            </div>

            <div className='about-footer'>
                <h1 id='temp19'>Information</h1>
                <hr></hr>
                <Link style={{ textDecoration: "none" }} to="/">HOME</Link>
                <Link style={{ textDecoration: "none" }} to="/projects">PROJECTS</Link>
                <Link style={{ textDecoration: "none" }} to="/contact">DESIGN IDEAS</Link>
                <Link style={{ textDecoration: "none" }} to="/connectus">CONNECT US</Link>
                <Link to="/consultus">CONSULT US </Link>
                <Link to="/howitworks">HOW IT WORKS </Link>
                <Link to="/modularjourney">MODULAR JOURNEY </Link>
                <Link to="/offering">OFFERING</Link>
            </div>

            <div className='about-footer media'>
                <h1 id='temp19'>Media Handles</h1>
                <hr></hr>
               <p id='temp19'>instagram</p>
               <p id='temp19'>youtube</p>
               <p id='temp19'>facebook</p>
               <p id='temp19'>LinkedIn</p>
            </div>
        </div>
    )
}

export default Footer