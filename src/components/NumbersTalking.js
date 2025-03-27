import React, { useEffect, useRef, useState } from 'react';

const NumbersTalking = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stops observing after it appears
                }
            },
            { threshold: 0.3 } // Triggers when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className={`NumbersContainer ${isVisible ? 'visible' : 'hidden'}`}>
            <div className='numbersHeading'>
                <p>Let Our Numbers Do the Talking</p>
            </div>

            <div className='hero-numbers-display'>
                <div className='numbers-grids'>
                    <div className='numberCards'>
                        <div className='imagenum'><img src='Images/homeLogo.png' alt='Projects' /></div>
                        <div className='textnum'>
                            <p style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>50+</p>
                            <p style={{ fontSize: "20px", fontWeight: "500", textAlign: "center", marginTop: "-10px" }}>Completed Projects</p>
                        </div>
                    </div>

                    <div className='numberCards'>
                        <div className='imagenum'><img src='Images/experts.avif' alt='Experts' /></div>
                        <div className='textnum'>
                            <p style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>20+</p>
                            <p style={{ fontSize: "20px", fontWeight: "500", textAlign: "center", marginTop: "-10px" }}>Expert Designers</p>
                        </div>
                    </div>

                    <div className='numberCards'>
                        <div className='imagenum'><img src='Images/cities.avif' alt='Cities' /></div>
                        <div className='textnum'>
                            <p style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>10+</p>
                            <p style={{ fontSize: "20px", fontWeight: "500", textAlign: "center", marginTop: "-10px" }}>Cities Covered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumbersTalking;
