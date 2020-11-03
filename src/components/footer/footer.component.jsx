import React from 'react';
import './footer.styles.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
    <div className='footer'>
        <footer>
          <p>© Lisa Chen {year}</p>
        </footer>
    </div>
    );
};

export default Footer;
