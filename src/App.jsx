import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Marquee from './components/Marquee';
import DigitalSolutions from './components/DigitalSolutions';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import bgImage from './assets/images/Women_Footwear.jpg';

function App() {
  return (
    <div className="min-h-screen selection:bg-amber-200 selection:text-amber-900 relative overflow-hidden">
      {/* Background image */}
      <div className="fixed inset-0 -z-10 bg-hero-img" style={{ backgroundImage: `url(${bgImage})` }} />
      {/* Dark overlay for glass contrast */}
      <div className="fixed inset-0 -z-10 bg-black/40" />

      {/* Floating glow orbs matching image palette */}
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: '#E86A33', top: '5%', left: '-10%' }} />
      <div className="glow-orb" style={{ width: '450px', height: '450px', background: '#CDDC39', top: '25%', right: '-5%' }} />
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: '#C8A951', top: '50%', left: '-8%' }} />
      <div className="glow-orb" style={{ width: '400px', height: '400px', background: '#CDDC39', top: '70%', right: '10%' }} />
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: '#E86A33', bottom: '3%', left: '15%' }} />

      <div className="relative z-10">
        <Header />
        <ScrollToTop />
        <main className="space-y-6 sm:space-y-8 px-3 sm:px-5 lg:px-8">
          <section id="home"><Hero /></section>
          <section id="collection"><Services /></section>
          <section id="about"><About /></section>
          <Marquee />
          <section id="new-arrivals"><DigitalSolutions /></section>
          <section id="membership"><Pricing /></section>
          <Testimonials />
          <section id="faq"><FAQ /></section>
          <Marquee />
        </main>
        <div className="px-3 sm:px-5 lg:px-8 mt-6 sm:mt-8 pb-6 sm:pb-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
