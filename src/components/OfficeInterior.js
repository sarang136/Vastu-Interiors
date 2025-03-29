
import { Link } from 'react-router-dom';
import GalleryForOffice from '../utils/GalleryForOfficeDesigns';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Anchors from './Anchors';


const OfficeInterior = () => {
    const [selectedImage, setSelectedImage] = useState(null);




    return (
        <div className='Contact-Conatiner'>
            {/* Keeping navbarForContact as it is */}
            <Anchors />

            <div className='nicheKhich'>
            <div className='navlinkNavbar'>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Home Interiors
                </NavLink>

                <NavLink to="/officeInterior"
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                    style={{ color: "black", textDecoration: "none" }}>
                    Office Interiors
                </NavLink>
            </div>
            </div>
            <div className='mainConatainer'>

                <div className='heroContainer'>
                    <div className='DesignIdeasHeading'>
                        <p>Office Interior Designs</p>
                        <p style={{ fontSize: "20px", width: "820px" }}>We bring you meticulously curated office interior design ideas to transform your workspace into a hub of productivity and style. Explore exclusive office design trends that are as functional as they are inspiring. Our expert interior designers have crafted ideas for workstations, meeting rooms, reception areas, and more to help you create a workspace that perfectly aligns with your professional needs.</p>
                    </div>

                </div>

                <div className={`DesignDisplay ${selectedImage ? "blur-background" : ""}`}>
                    <div className="GalleryForOffice">
                        {GalleryForOffice.map((resultGallery, index) => (
                            <div className="GalleryImages" key={index}>
                                <img
                                    src={resultGallery.image}
                                    alt="Office Gallery"
                                    onClick={() => setSelectedImage(resultGallery.image)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Modal for showing full-screen image */}
                    {selectedImage && (
                        <div className="modal">
                            <span className="close-btn" onClick={() => setSelectedImage(null)}>✖</span>
                            <img src={selectedImage} alt="Full View" className="modal-image" />
                        </div>
                    )}
                </div>




                <div className='FooterForDesignideas'>
                    <Footer />
                </div>
            </div>


        </div>



    )
};

export default OfficeInterior;
