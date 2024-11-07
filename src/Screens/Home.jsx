import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banners/Banner';
import ContentInfo from '../Components/ContentInfo/ContentInfo';
import ContentInfoWithBtn from '../Components/ContentInfoWithBtn/ContentInfoWithBtn';
import aboutImg from '../assets/about-img.png';
import OurMissionImg from '../assets/mission-img.png';
import ChooseUsImg from '../assets/choose-us.png';
import OurValue from '../Components/OurValue/OurValue';
import OurServices from '../Components/OurServices/OurServices';
import ContactForm from '../Components/ContactForm/ContactForm';
import contactContentImg from '../assets/contact-form-img.png';
import Footers from '../Components/Footer/Footers';
import footerLogo from '../assets/footer-logo.png';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ContentInfoWithBtn
        contentImg={aboutImg}
        subText={'Prismara Solutions, LLC'}
        mainHeading={'About Us'}
        subTextAlt={'Innovative Solutions for a Better Tomorrow'}
        text={
          <>
            <span>Prismara Solutions</span> is a Service Disabled Veteran Owned Small Business (SDVOSB) committed to delivering excellence across a broad spectrum of professional services.
            <br /><br />
            From medical staffing to IT support, we provide tailored solutions that meet the unique needs of our clients. Our team is driven by innovation, integrity, and dedication to achieving impactful results.
          </>
        }
        gapValue={'50px'}
        imgClass={'about-img'}
        paddingValues={'86px 0 82px'}
        backgroundValue={'#ffffff'}
      />

      <ContentInfo
        contentImg={OurMissionImg}
        subText={'Prismara Solutions, LLC'}
        mainHeading={'Our Mission'}
        subTextAlt={'Innovative Solutions for a Better Tomorrow'}
        text={'Our mission is to empower our federal clients with exceptional service and cutting-edge solutions that drive efficiency, enhance performance, and deliver measurable results. We are dedicated to upholding the highest standards of integrity, innovation, and excellence in every project we undertake.'
        }
        gapValue={'96px'}
        imgClass={'about-img'}
        paddingValues={'0 0 120px'}
        flexDirectionValue={'row-reverse'}
        maxWidthValues={'456px'}
        backgroundValue={'#ffffff'}
      />

      <OurValue paddingValues={'120px 0'}
        backgroundValue={'#FCFCFC'}
        subText={'Prismara Solutions, LLC'}
        mainHeading={'Our Values'}
        subTextAlt={'Innovative Solutions for a Better Tomorrow'}
      />

      <OurServices paddingValues={'120px 0'} subText={'Prismara Solutions, LLC'}
        mainHeading={'Why Choose Us?'}
        subTextAlt={'Innovative Solutions for a Better Tomorrow'} />

      <ContentInfoWithBtn
        contentImg={ChooseUsImg}
        subText={'Prismara Solutions, LLC'}
        mainHeading={'Why Choose Us?'}
        subTextAlt={'Innovative Solutions for a Better Tomorrow'}
        text={
          <>
            Choosing  <span>Prismara Solutions</span> means choosing a partner who is dedicated to your success. We understand the unique demands of the federal government and are equipped to provide solutions that are both innovative and compliant with all regulatory requirements. Our commitment to excellence, combined with our comprehensive service offerings, makes us the preferred choice for agencies looking to enhance their operations and achieve their objectives.
            <br /><br />
            At Prismara Solutions, we are more than just a service provider—we are your partner in building a better, more efficient future.
          </>
        }
        gapValue={'40px'}
        imgClass={'ChooseUsImg'}
        paddingValues={'120px 0'}
        backgroundValue={'#FCFCFC'}
      />

      <ContactForm paddingValues={'120px 0'} subText={'Prismara Solutions, LLC'}
        mainHeading={'Why Choose Us?'}
        subTextAlt={'Innovative Solutions for a Better Tomorrow'}
        contactContentImg={contactContentImg}        
        />

        <Footers paddingValues={'80px 0'} backgroundValue={'#23232F'} footerLogo={footerLogo}/>


    </>
  );
};

export default Home;
