import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import AppStore from '../components/Home/AppStore';
import IntroduceSection from '../components/Home/Introduce';
import SportsSection from '../components/Home/SportsSection';
import WorldWide from '../components/Home/WorldWide';

const Home = () => (
  <div>
    <Header />
    <IntroduceSection />
    <SportsSection />
    <WorldWide />
    <AppStore />
    <Footer />
  </div>
);

export default Home;
