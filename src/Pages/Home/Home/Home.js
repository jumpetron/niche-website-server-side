import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import Banner from './Banner/Banner';
import Servicing from './Servicing/Servicing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Servicing></Servicing>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;