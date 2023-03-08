import React from 'react';
import AtoZHeath from '../AtoZHealth/AtoZHeath';
import Hero from '../Hero/Hero';
import HomeBanner from '../HomeBanner/HomeBanner';
import Search from '../Search/Search';
import ToolsBanner from '../ToolsBanner/ToolsBanner';


const Home = () => {
    return (
        <div>
         <Hero/>
         <HomeBanner/>
         <ToolsBanner/>
         <AtoZHeath/>
         <Search/>
        </div>
    );
};

export default Home;