import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';


const Anchors = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='temp-container'>
            <div className='container'>
                <div className='anchors'>
                    <p>VASTU INTERIORS </p>
                    <div className='nothingDiv'>

                        <Link style={{ textDecoration: "none" }} to="/">HOME</Link>
                        <Link style={{ textDecoration: "none" }} to="/about">ABOUT US</Link>
                        <Link style={{ textDecoration: "none" }} to="/projects">PROJECTS</Link>
                        <Link style={{ textDecoration: "none" }} to="/contact">DESIGN IDEAS</Link>

                        {/* <Link style={{ textDecoration: "none" }} to="/howitworks">How It Works</Link>
                        <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/modularjourney">A Modular Journey</Link>
                        <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/referfriend">Refer A Friend</Link> */}

                    </div>
                    <div>
            {/* Hamburger Menu */}
            <div className="hamburger" onClick={() => setIsOpen(true)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Sidebar */}
            
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className='navbarLogo'>
            <Link to={"/"}><p>VASTU INTERIORS</p></Link>
            </div>
            <span className='dash1'></span>
               
                {/* Close Button */}
                <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
                <Link to="/">HOME</Link>
                <Link to="/consultus">CONSULT US </Link>
                <Link to="/howitworks">HOW IT WORKS </Link>
                <Link to="/modularjourney">MODULAR JOURNEY </Link>
                <Link to="/offering">OFFERING</Link>
                <Link to="/referfriend">REFER A FRIEND </Link>
                <Link id='designI' to="/contact">DESIGN IDEAS</Link>
                <Link id='designI' to="/about">ABOUT US</Link>
                <Link id='designI' to="/projects">PROJECTS</Link>
            </div>
        </div>
                </div>
            </div>





        </div>
    )
}

export default Anchors