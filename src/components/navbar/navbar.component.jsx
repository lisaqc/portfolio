import React from 'react';
import './navbar.styles.scss';
import  Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import Toggle from 'react-toggle'

const CustomNavbar = () => {

    const [darkMode, setDarkMode] = React.useState(getInitialMode())  
    React.useEffect(() => {
      localStorage.setItem('dark', JSON.stringify(darkMode));
    }, [darkMode]);
    
    function getInitialMode() {
      const isReturningUser = 'dark' in localStorage;
      const savedMode = JSON.parse(localStorage.getItem('dark'));
      const userPrefersDark = getPrefColorScheme();
      // if mode was saved -> dark / light
      if(isReturningUser) {
        return savedMode;
        // if preferred color scheme is dark -> dark
      } else if (userPrefersDark) {
        return true;
        // otherwise -> light
      } else {
        return false;
      }
    }
  
    function getPrefColorScheme() {
      if(!window.matchMedia) return;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand className = "brand-name" href="/">Lisa Chen</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto menu-items">
                    <Nav.Link className="menu-item" href="/about">About</Nav.Link>
                    <Nav.Link className="menu-item" href="/projects">Projects</Nav.Link>
                    <Nav.Link className="menu-item" href="/resume">Resume</Nav.Link>
                </Nav>
                <Nav className="mr-auto menu-icon-items">
                    <Nav.Link className="menu-item" href="http://linkedin.com/in/lisaqc" rel="noopener noreferrer" target="_blank"><AiOutlineLinkedin className = 'menu-icon'/></Nav.Link>
                    <Nav.Link className="menu-item" href="mailto:lisachencal@gmail.com" rel="noopener noreferrer" target="_blank"><AiOutlineMail className = 'menu-icon'/></Nav.Link>
                    {/* <Nav.Link className="menu-toggle">
                            <span className = "dark-mode">Dark mode</span>
                            <Toggle
                                defaultChecked={darkMode}
                                icons={false}
                                onChange={() => setDarkMode(prevMode => !prevMode)} />
                    </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
