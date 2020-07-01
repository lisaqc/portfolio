import React from 'react';
import 'font-awesome/css/font-awesome.css';
import Navbar from '../../components/navbar/navbar.component'
import Footer from '../../components/footer/footer.component';
import './about.styles.css';

const About = () => {
    return (
    <div className='about-page'>
        <Navbar/>
        <Footer/>
    </div>
    );
};

export default About;
