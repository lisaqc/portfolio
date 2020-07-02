
import React from 'react';
import Typical from 'react-typical';
import 'font-awesome/css/font-awesome.css';
import './home.styles.css';
import Navbar from '../../components/navbar/navbar.component'
import Footer from '../../components/footer/footer.component';


const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
          <Navbar/>
        <div className = 'header'>
          <div className = 'info'>
            <div className = 'name'>HELLO, I'M LISA</div>
            <div className = 'title'>I am a {''}
              <Typical 
                loop={Infinity}
                wrapper='b'
                steps={[
                  'Product Manager 💻', 
                  1000,
                  'Content Creator 📸',
                  1000,
                  'Cooking Enthusaist 👩‍🍳',
                  1000
                ]}
              />
            </div>
          </div>
          </div>
      </header>
      <Footer/>
      </div>
    );
};

export default Home;