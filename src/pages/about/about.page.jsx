import React from 'react';
import Navbar from '../../components/navbar/navbar.component'
import Footer from '../../components/footer/footer.component';
import AboutMe from '../../components/aboutMe/aboutMe.component';
import GettingMe from '../../components/gettingMe/gettingMe.component';

const About = () => {
    return (
    <div className='about-page'>
        <Navbar/>
        <AboutMe/>
        <GettingMe/>
        <Footer/>
    </div>
    );  
};

export default About;
