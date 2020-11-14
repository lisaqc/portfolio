import React from 'react';
import './footer.styles.scss';
import { TiMessages } from 'react-icons/ti';
import Button from 'react-bootstrap/Button';

const Footer = (props) => {  
    const year = new Date().getFullYear();

    return (
    <div className='footer'>
        <footer> 
          {props.showButton &&
            <Button variant="light" className = 'footer-connect'  href="mailto:lisachencal@gmail.com" rel="noopener noreferrer" target="_blank">
                <TiMessages className = 'footer-icon'/>
                <div className = 'footer-connect-text'>
                  Ideas or suggestions? Lets Connect!
                </div>
            </Button>
          }
          <p>© Lisa Chen {year}</p>
        </footer>
    </div>
    );
};

export default Footer;
