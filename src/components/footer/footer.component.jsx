import React from 'react';
import 'font-awesome/css/font-awesome.css';
import './footer.styles.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
    <div className='footer'>
        <span className = 'footer-info'> If you are interested in collaborating or want to share experiences and opportunities, please do not hesitate to reach out!</span>
        <hr/>
        <ul className="Social-Icons">
            <li>
                <div>
                  <a href="http://linkedin.com/in/lisaqc" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin icon tooltip"><div className = 'tooltiptext'>LinkedIn</div></i></a>              
                </div>
              </li>
              <li>
                <div>
                  <a href="mailto:lisachencal@gmail.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope icon tooltip"><div className = 'tooltiptext'>Email</div></i>
                  </a>
                </div>
              </li>
              {/* <li>
                <div>
                  <a href="http://instagram.com/itslisa.c" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram icon tooltip"><div className = 'tooltiptext'>Instagram</div></i></a>              
                </div>
              </li> */}
              {/* <li>
                <div>
                  <a href="http://twitter.com/thelisaqc" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter icon tooltip"><div className = 'tooltiptext'>Twitter</div></i></a>              
                </div>
              </li>

              <li>
                <div>
                  <a href="http://github.com/lisaqc" rel="noopener noreferrer" target="_blank"><i className="fa fa-github icon tooltip"><div className = 'tooltiptext'>Github</div></i></a>              
                </div>
              </li> */}
            </ul>
          <footer>
            <p>Copyright © Lisa {year}</p>
          </footer>
    </div>
    );
};

export default Footer;
