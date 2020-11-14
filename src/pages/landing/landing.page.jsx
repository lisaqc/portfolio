import React from 'react';
import Navbar from '../../components/navbar/navbar.component'
import Summary from '../../components/summary/summary.component'
import Footer from '../../components/footer/footer.component';
import './landing.styles.css';

const Landing = () => {
    return (
    <div className='landing-page'>
        <Navbar/>
        <Summary/>
        <Footer showButton = {true} />
    </div>
    );
};

export default Landing;
