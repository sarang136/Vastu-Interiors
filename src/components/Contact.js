
import { Link } from 'react-router-dom';
import DesignCards from '../utils/DeisgnCards';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Contact = () => {




  return (
    <div className='Contact-Conatiner'>
      {/* Keeping navbarForContact as it is */}
      <div className='navbarForContact'>
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
      </div>

      <div className='second-navbar-for-home-and-office'>
        <div className="secondNavbar-KitchenComp">
          <div className="anchors3">
            <div className="nothingDiv3">

              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}>
                Home Interiors
              </NavLink>

              <NavLink to="/officeInterior"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                style={{color:"black", textDecoration:"none"}}>
                Office Interiors
              </NavLink>

            </div>
          </div>
        </div>

      </div>



      <div className='heroContainer'>
        <div className='DesignIdeasHeading'>
          <p>Home Interior Design</p>
          <p style={{ fontSize: "20px", width: "820px" }}>We bring you carefully-curated interior design ideas, to give your home a brand new look. Explore exclusive interior designs and trends that are every bit inspirational as they are practical. Our team of interior designers have put together ideas across kitchen, bedroom, living room and more, to help you pick a design that will best suit your home interior requirements.</p>
        </div>

      </div>

      <div className='DesignDisplay'>
        <div className='DesignGridGtc'>
          {
            DesignCards.map((resultDesign) => (
              <div className='DesignGrids'>
                <Link to={resultDesign?.path}>
                  <img src={resultDesign?.image} alt="Design" />
                </Link>
                <p style={{ marginLeft: "10px", fontSize: "25px" }}>{resultDesign.name}</p>
                <p style={{ marginLeft: "10px", fontSize: "15px" }}>{resultDesign.numberOfDesigns}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className='FooterForDesignideas'>
        <Footer />
      </div>
    </div>



  )
};

export default Contact;
