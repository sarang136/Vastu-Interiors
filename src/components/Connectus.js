import React from 'react'
import Anchors from './Anchors'
import Footer from './Footer'

const Connectus = () => {
    return (
        <div className='ConnectContainer'>
            <Anchors />

            <div className='ConnectHero'>
                <div className='TextConnect'>
                    <img src='https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/about-us-1629737930-WrXkD/contact-icon-1734351899-uIzhv.png' />
                    <p id='temp40'>Contact Us</p>
                    <p id='temp41'>Help is just a click away</p>
                    <p id='temp42'>Call us anytime between 10am - 7pm</p>
                </div>

                <div className='formLittle'>
                    <p id='temp43'>vastuinteriors@gmail.com</p>
                    <hr />
                    <p id='temp44'>9665150750</p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Connectus