import React, { useRef } from 'react'
import Navbar from './navvbar/Navbar';
import About from './About/About';
import FAQ from "./FAQSection/FAQ";
import Feature1 from './KeyFeature/Feature1';
import Feature2 from './KeyFeature/Feature2';
import Feature3 from './KeyFeature/Feature3';
import Feature4 from './KeyFeature/Feature4';
import Contact from './contact/Contact';
import Event from '../certifcate/eventCreation/Event';


const MainComponent = () => {
  const aboutRef=useRef(null);
  const FAQRef=useRef(null);
  const contactRef=useRef(null);

  const scrollToAbout=()=>{
    aboutRef.current.scrollIntoView({behavior:"smooth"})
  }
  const scrollToFAQ=()=>{
    FAQRef.current.scrollIntoView({behavior:"smooth"})
  }
  const scrollToContact=()=>{
    contactRef.current.scrollIntoView({behavior:"smooth"})
  }


  return (
    <div >
      <Navbar 
      scrollToAbout={scrollToAbout}
      scrollToContact={scrollToContact}
      scrollToFAQ={scrollToFAQ}/>
     <About/>
     <Feature1 ref={aboutRef}/>
     <Feature2/>
     <Feature3/>
     <Feature4/>
     <FAQ ref={FAQRef}/>
     <Contact ref={contactRef}/>
     <Event/>
    </div>
  )
}

export default MainComponent
