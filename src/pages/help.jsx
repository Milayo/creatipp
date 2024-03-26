import React from 'react';
import HeaderComponent from '../components/header';
import HelpCenter from '../components/helpcenter';
import HeroSection from '../components/herosection';

const Help = () => {
    return (
        <div className=" flex flex-col bg-black">
            <HeroSection />
            <HelpCenter />
        </div>
        
    )
}
export default Help