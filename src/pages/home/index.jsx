import React from 'react'
import Hero from './sections/Hero';
import AboutProduct from './sections/AboutProduct';
import AboutInnovator from './sections/AboutInnovator';
import Showcase from './sections/Showcase';
import Contact from './sections/Contact';
import Resources from './sections/Resources';

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutProduct />
        <AboutInnovator />
        <Showcase />
        <Resources />
        <Contact />
    </div>
  );
};

export default Home;