import React from 'react'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footertext'>
                <p>Vastu Interiors</p>
            </div>

            <div className='contactsGridsDisplay'>
                <div className='contactsGridsGtc'>
                    <div className='mainGrids'>
                        <p style={{ marginTop: '20px', marginLeft: "20px" }}>Email id : sandeepjangid@gmail.com</p>
                        <p style={{ marginTop: '0px', marginLeft: "20px" }}>Contact Number : 9665150750</p>
                        <div className='scHandles'>
                            <div className='logos'><a href='https://www.livspace.com/in/about-us'><img src='Images/insta.webp'></img></a></div>
                            <div className='logos' style={{ marginLeft: "-40px", width: "90%" }}><a href='https://www.livspace.com/in/about-us'><img src='Images/yt.webp'></img></a></div>
                            <div className='logos' style={{ marginLeft: "-32px", width: "80%", height: "35px", marginTop: "9px" }}><a href='https://www.livspace.com/in/about-us'><img src='Images/fb.webp'></img></a></div>
                        </div>
                    </div>
                    <div className='mainGrids locations'>
                        <p>Locations - Mumbai, Pune, Nagpur, Nashik, Aurangabad, Solapur, Kolhapur, Thane, Amravati, Ratnagiri, Jalgaon, Latur, Satara, Sangli, Ahmednagar, Chandrapur, Nanded, Dhule, Bhiwandi, and Akola </p>
                    </div>
                </div>
               
            </div>
            <div className='copyright'>
            <p>© 2025 VastuInteriors.com All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer