
import React from 'react';
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
              <div>HELLO, I'M LISA</div>
              <div className = 'title'>Product Manager | Content Creator | Cooking Enthusiast</div>
            </div>
            </div>
        </header>
        <Footer/>
       </div>
    );
};

export default Home;