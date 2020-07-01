
import React from 'react';
import 'font-awesome/css/font-awesome.css';
import './home.styles.css';
import Navbar from '../../components/navbar/navbar.component'
import Footer from '../../components/footer/footer.component';


const Home = () => {

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
      <div className={"home-page", `${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <header className="home-header">
            <Navbar/>
            <span className = 'toggle'>
              <span onClick={() => setDarkMode(prevMode => !prevMode)}>{darkMode ? '☀️' : '🌚'}</span>
            </span>
          <div className = 'header'>
            <div className = 'info'>
              <div>Hello | 你好
                <div>
                  My name is <b> Lisa Chen</b>
                  <div className = 'toggle-container'>
  
                  </div>
                </div>
              </div>
              <div className = 'title'>Software Engineer | Full Stack Developer</div>
              <div className = 'location'><i className="fa fa-map-marker pin"/>Toronto <span role="img" aria-label="Canada">  🇨🇦</span></div>
            </div>
            <div className = 'about'>
              I'm a 25-year-old, Chinese-Canadian.
              <br/>
              My passion is to work with talented individuals and solve complex problems with simple, elegant solutions.
              <br/>
              In my career, I have sought out diverse opportunities to apply my technical skills.
            </div>
            <div className = 'hobbies'>
            I also enjoy: 
              <span role="img" aria-label="Tech"> 💻 |</span>
              <span role="img" aria-label="Beer"> 🍺 | </span>
              <span role="img" aria-label="Basketball"> 🏀 |</span> 
              <span role="img" aria-label="Coffee"> ☕️</span>
            </div>
            </div>
        </header>
        <Footer/>
       </div>
    );
};

export default Home;