
import { Link } from 'react-router-dom';
import DesignCards from '../utils/DeisgnCards';
import Footer from './Footer';
import Anchors from './Anchors';

const Contact = () => {




  return (
    <div className='Contact-Conatiner'>
      {/* Keeping navbarForContact as it is */}
      <Anchors />


      <div className='mainConatainer'>
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



    </div>



  )
};

export default Contact;
