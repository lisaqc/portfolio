import React from 'react';
import Navbar from '../../components/navbar/navbar.component'
import Summary from '../../components/summary/summary.component'
import Footer from '../../components/footer/footer.component';

const Landing = () => {
    return (
    <div className='landing-page'>
        <Navbar/>
        <Summary/>
        <Footer/>
    </div>
    );  
};

export default Landing;
