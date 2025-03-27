import React from 'react';
import ReactDOM from 'react-dom/client';
  
import './index.css?v=2';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import OneComp from './components/OneComp';
import TwoComp from './components/TwoComp';
import ThreeComp from './components/ThreeComp';
import FourComp from './components/FourComp';
import FiveComp from './components/FiveComp';
import SixComp from './components/SixComp';
import OfficeInterior from './components/OfficeInterior';
import FirstKitchenImage from './components/FirstKitchenImage';
import SecondKitchenImage from './components/SecondKitchenImage';
import ThirdKitchenImage from './components/ThirdKitchenImage';
import FourthKitchenImage from './components/FourthKitchenImage';
import FifthKitchenImage from './components/FifthKitchenImage';
import SixthKitchenImage from './components/SixthKitchenImage';
import SeventhKitchenImage from './components/SeventhKitchenImage';
import EightKitchenImage from './components/EightKitchenImage';
import NinthKitchenImage from './components/NinthKitchenImage';
import TenthKitchenImage from './components/TenthKitchenImage';
import ELeventhKitchenImage from './components/ELeventhKitchenImage';
import TwelvethKitchenImage from './components/TwelvethKitchenImage ';


import FirstLivingImage from './components/LivingRoomImages/FirstLivingImage';
import SecondLivingImage from './components/LivingRoomImages/SecondLivingImage';
import ThirdLivingImage from './components/LivingRoomImages/ThirdLivingImage';
import FourthLivingImage from './components/LivingRoomImages/FourthLivingImage';
import FifthLivingImage from './components/LivingRoomImages/FifthLivingImage';
import SixthLivingImage from './components/LivingRoomImages/SixthLivingImage';
import SeventhLivingImage6 from './components/LivingRoomImages/SeventhLivingImage';
import SeventhLivingImage from './components/LivingRoomImages/SeventhLivingImage';
import EightLivingImage from './components/LivingRoomImages/EightLivingImage';
import NineLivingImage from './components/LivingRoomImages/NineLivingImage';
import TenthLivingImage from './components/LivingRoomImages/TenthLivingImage';
import EleventhLivingImage from './components/LivingRoomImages/EleventhLivingImage';
import TwelvethLivingImage from './components/LivingRoomImages/TwelvethLivingImage';
import FirstBedroomImage from './components/BedroomImages/FirstBedroomImage';
import SecondBedroomImage from './components/BedroomImages/SecondBedroomImage';
import ThirdBedroomImage from './components/BedroomImages/ThirdBedroomImage';
import FourthBedroomImage from './components/BedroomImages/FourthBedroomImage';
import FifthBedroomImage from './components/BedroomImages/FifthBedroomImage';
import SixthBedroomImage from './components/BedroomImages/SixthBedroomImage';
import SeventhBedroomImage from './components/BedroomImages/SeventhBedroomImage';
import EightBedroomImage from './components/BedroomImages/EightBedroomImage';
import NinthBedroomImage from './components/BedroomImages/NinthBedroomImage';
import TenthBedroomImage from './components/BedroomImages/TenthBedroomImage';
import EleventhBedroomImage from './components/BedroomImages/EleventhBedroomImage';
import TwelvethBedroomImage from './components/BedroomImages/TwelvethBedroomImage';
import FirstWardImages from './components/WardrobeImages/FirstWardImages';
import SecondWardImages from './components/WardrobeImages/SecondWardImage';
import ThirdWardImages from './components/WardrobeImages/ThirdWardImage';
import FourthWardImages from './components/WardrobeImages/FourthWardImage';
import FifthWardImages from './components/WardrobeImages/FifthWardImage';
import SixthWardImages from './components/WardrobeImages/SixthWardImage';
import SeventhWardImages from './components/WardrobeImages/SeventhWardImages';
import EightWardImages from './components/WardrobeImages/EightWardImages';
import NinthWardImages from './components/WardrobeImages/NinthWardImages';
import TenthWardImages from './components/WardrobeImages/TenthWardImages';
import EleventhWardImages from './components/WardrobeImages/EleventhWardImage';
import TwelvethWardImages from './components/WardrobeImages/TwelvethWardImage';
import FirstDinImage from './components/DiningImages/FirstDinImage';
import SecondDinImage from './components/DiningImages/SecondDinImage';
import ThirdDinImage from './components/DiningImages/ThirdDinImage';
import FourthDinImage from './components/DiningImages/FourthDinImage';
import FifthDinImage from './components/DiningImages/FifthDinImage';
import SixthDinImage from './components/DiningImages/SixthDinImage';
import SeventhDinImage from './components/DiningImages/SeventhDinImage';
import EightDinImage from './components/DiningImages/EightDinImage';
import NinthDinImage from './components/DiningImages/NinthDinImage';
import TenthDinImage from './components/DiningImages/TenthDinImage';
import EleventhDinImage from './components/DiningImages/EleventhDinImage';
import TwelvethDinImage from './components/DiningImages/TwelvethDinImage';
import FirstKidImage from './components/KidsImage/FirstKidImage';
import SecondKidImage from './components/KidsImage/SecondKidImage';
import ThirdKidImage from './components/KidsImage/ThirdKidImage';
import FourthKidImage from './components/KidsImage/FourthKidImage';
import FifthKidImage from './components/KidsImage/FifthKidImage';
import SixthKidImage from './components/KidsImage/SixthKidImage';
import SeventhKidImage from './components/KidsImage/SeventhKidImage';
import EightKidImage from './components/KidsImage/EightKidImage';
import NinthKidImage from './components/KidsImage/NinthKidImage';
import TenthKidImage from './components/KidsImage/TenthKidImage';
import EleventhKidImage from './components/KidsImage/EleventhKidImage';
import TwelvethKidImage from './components/KidsImage/TwelvethKidImage';
import ConsultUs from './components/ConsultUs';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Offering from './components/HowItWorks/Offering';
import ReferFriend from './components/HowItWorks/ReferFriend';
import ModularJourney from './components/HowItWorks/ModularJourney';
const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: "/oneComp",
    element: <OneComp />
  },
  {
    path: "/twoComp",
    element: <TwoComp />
  },
  {
    path: "/threeComp",
    element: <ThreeComp />
  },
  {
    path: "/fourComp",
    element: <FourComp />
  },
  {
    path: "/fiveComp",
    element: <FiveComp />
  },
  {
    path: "/sixComp",
    element: <SixComp />
  }, {
    path: "/officeInterior",
    element: <OfficeInterior />
  },
  {
    path: "/firstkitchenimage",
    element: <FirstKitchenImage />
  },
  {
    path: "/secondkitchenimage",
    element: <SecondKitchenImage />
  },
  {
    path: "/thirdkitchenimage",
    element: <ThirdKitchenImage />
  },
  {
    path: "/fourthkitchenimage",
    element: <FourthKitchenImage />
  },
  {
    path: "/fifthkitchenimage",
    element: <FifthKitchenImage />
  },
  {
    path: "/sixthkitchenimage",
    element: <SixthKitchenImage />
  },
  {
    path: "/seventhkitchenimage",
    element: <SeventhKitchenImage />
  },
  {
    path: "/eigthkitchenimage",
    element: <EightKitchenImage />
  },
  {
    path: "/ninthkitchenimage",
    element: <NinthKitchenImage />
  },
  {
    path: "/tenthkitchenimage",
    element: <TenthKitchenImage />
  },
  {
    path: "/eleventhkitchenimage",
    element: <ELeventhKitchenImage />
  },
  {
    path: "/twelvethkitchenimage",
    element: <TwelvethKitchenImage />
  },
  {
    path: "/firstlivingimage",
    element: <FirstLivingImage />
  },
  {
    path: "/secondlivingimage",
    element: <SecondLivingImage />
  },
  {
    path: "/thirdlivingimage",
    element: <ThirdLivingImage />
  },
  {
    path: "/fourthlivingimage",
    element: <FourthLivingImage />
  },
  {
    path: "/fifthlivingimage",
    element: <FifthLivingImage />
  },
  {
    path: "/sixthlivingimage",
    element: <SixthLivingImage />
  },
  {
    path: "/seventhlivingimage",
    element: <SeventhLivingImage />
  },
  {
    path: "/eightlivingimage",
    element: <EightLivingImage />
  },
  {
    path: "/ninthlivingimage",
    element: <NineLivingImage />
  },
  {
    path: "/tenthlivingimage",
    element: <TenthLivingImage />
  },
  {
    path: "/eleventhlivingimage",
    element: <EleventhLivingImage />
  },
  {
    path: "/twelvethlivingimage",
    element: <TwelvethLivingImage />
  },
  {
    path: "/firstbedroomimage",
    element: <FirstBedroomImage />
  },
  {
    path: "/secondbedroomimage",
    element: <SecondBedroomImage />
  },
  {
    path: "/thirdbedroomimage",
    element: <ThirdBedroomImage />
  },
  {
    path: "/fourthbedroomimage",
    element: <FourthBedroomImage />
  },
  {
    path: "/fifthbedroomimage",
    element: <FifthBedroomImage />
  },
  {
    path: "/sixthbedroomimage",
    element: <SixthBedroomImage />
  },
  {
    path: "/seventhbedroomimage",
    element: <SeventhBedroomImage />
  },
  {
    path: "/eightbedroomimage",
    element: <EightBedroomImage />
  },
  {
    path: "/ninthbedroomimage",
    element: <NinthBedroomImage />
  },
  {
    path: "/tenthbedroomimage",
    element: <TenthBedroomImage />
  },
  {
    path: "/eleventhbedroomimage",
    element: <EleventhBedroomImage/>
  },
  {
    path: "/twelvethbedroomimage",
    element: <TwelvethBedroomImage/>
  },
  {
    path:"/firstwardimage",
    element: <FirstWardImages/>
  },
  {
    path:"/secondwardimage",
    element: <SecondWardImages/>
  },
  {
    path:"/thirdwardimage",
    element: <ThirdWardImages/>
  },
  {
    path:"/fourthwardimage",
    element: <FourthWardImages/>
  },
  {
    path:"/fifthwardimage",
    element: <FifthWardImages/>
  },
  {
    path:"/sixthwardimage",
    element: <SixthWardImages/>
  },
  {
    path:"/seventhwardimage",
    element: <SeventhWardImages/>
  },
  {
    path:"/eightwardimage",
    element: <EightWardImages/>
  },
  {
    path:"/ninthwardimage",
    element: <NinthWardImages/>
  },
  {
    path:"/tenthwardimage",
    element: <TenthWardImages/>
  },
  {
    path:"/eleventhwardimage",
    element: <EleventhWardImages/>
  },
  {
    path:"/twelvethwardimage",
    element: <TwelvethWardImages/>
  },





  {
    path:"/firstdinimage",
    element: <FirstDinImage/>
  },{
    path:"/seconddinimage",
    element: <SecondDinImage/>
  },{
    path:"/thirddinimage",
    element: <ThirdDinImage/>
  },{
    path:"/fourthdinimage",
    element: <FourthDinImage/>
  },{
    path:"/fifthdinimage",
    element: <FifthDinImage/>
  },{
    path:"/sixthdinimage",
    element: <SixthDinImage/>
  },{
    path:"/seventhdinimage",
    element: <SeventhDinImage/>
  },{
    path:"/eightdinimage",
    element: <EightDinImage/>
  },{
    path:"/ninthdinimage",
    element: <NinthDinImage/>
  },{
    path:"/tenthdinimage",
    element: <TenthDinImage/>
  },{
    path:"/eleventhdinimage",
    element: <EleventhDinImage/>
  },{
    path:"/twelvethdinimage",
    element: <TwelvethDinImage/>
  }


  ,{
    path:"/firstkidimage",
    element: <FirstKidImage/>
  }
  ,{
    path:"/secondkidimage",
    element: <SecondKidImage/>
  }
  ,{
    path:"/thirdkidimage",
    element: <ThirdKidImage/>
  }
  ,{
    path:"/fourthkidimage",
    element: <FourthKidImage/>
  }
  ,{
    path:"/fifthkidimage",
    element: <FifthKidImage/>
  }
  ,{
    path:"/sixthkidimage",
    element: <SixthKidImage/>
  }
  ,{
    path:"/seventhkidimage",
    element: <SeventhKidImage/>
  }
  ,{
    path:"/eightkidimage",
    element: <EightKidImage/>
  }
  ,{
    path:"/ninthkidimage",
    element: <NinthKidImage/>
  }
  ,{
    path:"/tenthkidimage",
    element: <TenthKidImage/>
  }
  ,{
    path:"/eleventhkidimage",
    element: <EleventhKidImage/>
  }
  ,{
    path:"/twelvethkidimage",
    element: <TwelvethKidImage/>
  }
  ,{
    path:"/consultus",
    element: <ConsultUs/>
  }
  ,{
    path:"/howitworks",
    element: <HowItWorks/>
  }
  ,{
    path:"/offering",
    element: <Offering/>
  }
  ,{
    path:"/referfriend",
    element: <ReferFriend/>
  }
  ,{
    path:"/modularjourney",
    element: <ModularJourney/>
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
