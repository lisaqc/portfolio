import React from 'react';
import Navbar from '../../components/navbar/navbar.component'
import Summary from '../../components/summary/summary.component'
import Footer from '../../components/footer/footer.component';
import './about.styles.css';
import image from '../../assets/image.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Landing = () => {
    return (
    <div className='about-page'>
        <Navbar/>
        <Summary/>
        <Footer/>
    </div>
    );
};

export default Landing;
