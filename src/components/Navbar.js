import React from "react";
import Anchors from "./Anchors";
import Internet from "../CostumHooks/Internet";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import WhereWeWorkData from "../utils/WhereWeWorkData";
import ClientSayData from "../utils/ClientSayData";


import { useEffect, useState } from "react";


const Navbar = () => {


    // loader part
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000); // Show Navbar after 1 second
    }, []);

    // loader part


    const onlineStatus = Internet();
    if (onlineStatus === false) return <div className="offlineDiv">
        <img src="/Images/connection.jpg" alt="Connection" />

        <h1>
            Oopss!!
        </h1>
        <h3>It seems like you are offline, please check you network connection</h3>
    </div>



    // loader part

    if (loading) {
        return <div className="loader"></div>;
    }
    // loader part

    return (

        <section id="firstPage" className="relative w-full h-screen">

            <Anchors />


            {/* Background Video */}
            <div className="video-container">
                {/* <video autoPlay loop muted playsInline>
                    <source src="/Images/bgVedio.mp4" type="video/mp4" />
                </video> */}
                <img src="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/homepage/banner-1714034487-xNaST/homepage-banner-web-1714034622-yivWL.jpg"></img>
            </div>

            {/* Foreground Content */}
            <div className="foreground-content flex items-center justify-center h-full text-white">
                <h1 className="text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
                    HOME TO BEAUTIFUL INTERIORS
                    <div className="btnOfMainPage">
                        <Link to={"/consultus"}><button>BOOK A FREE CONSULTATION</button></Link>
                    </div>  </h1>


            </div>


            <div>



            </div>



            <div className="secondPage-hero">
                <div className="logo-TextDiv">
                    <h1 style={{ borderBottom: "1px solid black" }}>How it Started...</h1>
                </div>
                <div style={{ fontSize: "20px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }} className="para-text-div">
                    <p style={{ textAlign: "justify" }}> Vastu Interiors was founded in 2001 by Sawarmal Jangid with a vision to transform living spaces into aesthetically pleasing and functional environments. With a deep-rooted passion for craftsmanship and design, he established the company to provide budget-friendly and customized interior solutions for homes and commercial spaces. The foundation of Vastu Interiors was built on years of expertise in traditional woodworking and modern interior design techniques, ensuring a perfect blend of heritage and innovation. Starting as a small workshop, the company gradually expanded its operations, gaining a reputation for delivering high-quality interiors that cater to clients' unique tastes and preferences. Over the years, Vastu Interiors has grown into a trusted name in the industry, dedicated to fulfilling people's dreams of owning beautifully designed spaces that reflect their personality and lifestyle.</p>
                </div>
            </div>



            <div className="wherewework">
                <div className="text-heading-primary">
                    <p>Designing homes across India</p>
                </div>


                <div className="wwwDisplay">
                    <div className="wwwGrid">
                        {
                            WhereWeWorkData.map((res, index) => (  // Add 'index' here
                                <div className="wwwBoxes" key={index}>
                                    <img src={res.image} alt="Design" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


            <div className="client-says-container">
                <div className="text-client">
                    <p>Check out some of our customer reviews</p>
                </div>
                <div className="client-says-display">
                    <div className="client-says-grid">
                        {
                            ClientSayData.map((res2, index) => (
                                <div className="client-boxes" key={index}>
                                    <img src={res2.image} alt="Design" />
                                    <p>{res2.text}</p>
                                    <p style={{fontStyle:"italic"}}>- {res2.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>


            <div className="foundersDiv">
<div className="sawarmal">
    <div className="image"><img src="https://images.livspace-cdn.com/w:640/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/about-us-1629737930-WrXkD/mobile-1629737947-8cnvs/founders-1629749026-4Dd76/anuj-mobile-1632298064-KVsoM.jpg"></img></div>
    <div className="textt">
        <h1>Sawarmal Jangid</h1>
    <h3>founder</h3>
    <p>Sawarmal Jangid, the visionary behind Vastu Interiors, crafts dream homes with precision and passion, turning ideas into reality.</p>
        
    </div>
</div>

<div className="sawarmal">
    <div className="image"><img src="https://images.livspace-cdn.com/w:640/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/about-us-1629737930-WrXkD/mobile-1629737947-8cnvs/founders-1629749026-4Dd76/anuj-mobile-1632298064-KVsoM.jpg"></img></div>
    <div className="textt">
        <h1>Sandeep Jangid</h1>
    <h3>Co-founder </h3>
    <p>Sandeep Jangid, the strategist of Vastu Interiors, blends creativity with practicality, ensuring every home is as functional  .</p>
        
    </div>
</div>
            </div>


            <div className="GoTopBtn">
                <a href="#firstPage" >Go On Top</a>
            </div>

            <div className="thirdPage-hero">
                <div className="text-div-sec"><h1>Your Dream Home is just a click away</h1></div>

                <div className="btn-get">
                    <Link to={"/consultus"}><button>Consult Us</button></Link>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </section>
    );
};

export default Navbar;
