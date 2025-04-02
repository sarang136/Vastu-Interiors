import React from 'react'
import Anchors from './Anchors'
import Footer from './Footer'
import Carousel from './Carousel'

const Projects = () => {
  return (
    <div className='projectsContainer'>
      <Anchors />

      <div className='HeroProjects'>
        <p id='temp45'>View Some Of Our Work</p>
      </div>

      <div className='secPageHero'>
        <div className='textPartPro'>
          <p id='temp46'>Inspiration for home interior designs</p>
          <p id='temp47'>Give your home a new look with these interior design ideas curated for you</p>
        </div>
      </div>

      <div class="gallery">
        <img id='img1' src='https://media.designcafe.com/wp-content/uploads/2021/01/09115428/living-room-interior-design-for-small-indian-homes-with-subtle-pastel-dual-tone.jpg' />
        <img id='img2' src='https://img.freepik.com/free-photo/home-interior-design-stairs_23-2148986629.jpg?uid=R192733537&ga=GA1.1.777192746.1737202291&semt=ais_hybrid' />
        <img id='img2' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6t7gAga5XOBzAZcJWb991ToRgqLryDgqa4tjbrl8NVlWukSIkGMHQbjJLRXJWZKJ5m5xN2ltJym8_Je80LSoqE-5_A2mo2-ChxD10B79gOAy3rFzeJm83RSjYTgbp9ss5I1ARROBoBIPCYl9ryFiHKD1GhQ5nxXAHpmWxCUTpxEEquWCVhPrB-7O-VQ8/s1600/Cozy_and_Stylish_Living_Space.jpg' />
        <img id='img2' src='https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2011/3/9/0/Original_Miv-Watts-Indian-living-room-1_s3x4.jpg.rend.hgtvcom.1280.1707.85.suffix/1400960074782.webp' />
        <img id='img1' src='https://media.designcafe.com/wp-content/uploads/2023/09/20122948/simple-bedroom-interior-design-with-natural-light.jpg' />
        <img id='img2' src='https://i.pinimg.com/564x/cf/52/28/cf52282b4f2785ce38d1fcff4cbcab1b.jpg ' />
      </div>


      <div className='clProjects'>
        <Carousel />
      </div>

      <div className='secPageHero'>
        <div className='textPartPro'>
          <p id='temp46'>Get a glimpse of Office Designs</p>
          <p id='temp47'>Latest Offices interiors delivered the hassle-free way</p>
        </div>
      </div>



      <div className='latestContainer'>
        <img id='img3' src='https://578ae522.delivery.rocketcdn.me/wp-content/uploads/2024/09/v2-16-6.jpg' />
        <img id='img3' src='https://img.freepik.com/free-photo/view-modern-office_1170-1970.jpg?uid=R192733537&ga=GA1.1.777192746.1737202291&semt=ais_hybrid ' />
        <img id='img3' src='https://i.pinimg.com/736x/3c/c4/06/3cc4060c23081f2de30df60a87618e4b.jpg' />

      </div>

      <Footer />

    </div>
  )
}

export default Projects