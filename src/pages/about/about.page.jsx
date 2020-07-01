import React from 'react';
import 'font-awesome/css/font-awesome.css';
import './about.styles.css';

const About = () => {
    const year = new Date().getFullYear();

    return (
    <div className='project-page'> Coming Soon 
        <footer>
            <p>Copyright © Chen Liang {year}</p>
        </footer>
    </div>
    );
};

export default About;
