import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Mint_section from '../components/Mint_section';

function Mint_page() {
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
      <Mint_section/>
   
 
    </section>
    <Footer/>
    </>
  )
}

export default Mint_page
