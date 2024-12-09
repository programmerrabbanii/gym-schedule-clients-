import React from 'react';
import Bannar from '../components/Bannar';
import Achive from '../components/Achive';
import About from '../components/About';
import WhyChoose from '../components/WhyChoose';
import OurTeam from '../components/OurTeam';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Achive></Achive>
           <About></About>
           <WhyChoose></WhyChoose>
           <OurTeam></OurTeam>
        </div>
    );
};

export default Home;