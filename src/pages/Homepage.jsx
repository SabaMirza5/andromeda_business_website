import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Video from '../components/Video';
import Our_cards from '../components/Our_cards';
import Road_map from '../components/Road_map';
import Our_team from '../components/Our_team';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
// import Navbar from './components/Navbar';

function Homepage() {
  const backgroundStyle = {
    backgroundImage: `url(${require('../assets/imgs/homebg.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    overflow:'hidden',
};
  return (
    <>
    <Navbar/>
    <section style={backgroundStyle}>
    <Hero/>
    <Video/>
    <Our_cards/>
    <Road_map/>
    <Our_team/>
    <Faq/>
    </section>
    <Footer/>
    </>
  )
}

export default Homepage
