import React, { useEffect, useRef, useState } from 'react';

const AboutUsMore = () => {
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it becomes visible
                }
            },
            { threshold: 0.3 } // Adjust visibility threshold as needed
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={aboutRef} className={`secondPage ${isVisible ? 'visible' : 'hidden'}`}>
            <div className='heading'>
                <p>Meet Our <span style={{color:"#a79a9a"}}>Founders</span></p>
            </div>

            <div className='gridDisplay'>
                <div className='grid-gtc'>
                    <div className='grids'>
                        <div className='ImagePart'>
                            <img src='Images/download.jpg' alt='Sawarmal Jangid'></img>
                        </div>
                        <div className='textPart'>
                            <p style={{ marginTop: "10px", fontWeight: "800", fontSize: "25px" }}>Sawarmal Jangid</p>
                            <p style={{ marginTop: "0px", fontWeight: "500" }}>Founder</p>
                            <p style={{ marginTop: "5px", textAlign: "center" }}>
                                Sawarmal Jangid, the visionary behind Vastu Interiors, crafts dream homes with precision and passion, turning ideas into reality.
                            </p>
                        </div>
                    </div>

                    <div className='grids'>
                        <div className='ImagePart'>
                            <img src='Images/download.jpg' alt='Sandeep Jangid'></img>
                        </div>
                        <div className='textPart'>
                            <p style={{ marginTop: "10px", fontWeight: "800", fontSize: "25px" }}>Sandeep Jangid</p>
                            <p style={{ marginTop: "0px", fontWeight: "500" }}>Co-Founder</p>
                            <p style={{ marginTop: "5px", textAlign: "center" }}>
                                Sandeep Jangid, the strategist of Vastu Interiors, blends creativity with practicality, ensuring every home is as functional as it is beautiful.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutUsMore;
