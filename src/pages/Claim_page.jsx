import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Claim_section from '../components/Claim_section';

function Claim_page() {
  const backgroundStyle = {
    backgroundImage: `url(${require('../assets/imgs/claimbg.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    overflow:'hidden',
};
  return (
    <>
    <Navbar/>
    <section style={backgroundStyle}>
      <Claim_section/>
   
 
    </section>
    <Footer/>
    </>
  )
}

export default Claim_page
