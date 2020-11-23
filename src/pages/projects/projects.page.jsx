
import React from 'react';
import './projects.styles.scss';
import Navbar from '../../components/navbar/navbar.component'
import Footer from '../../components/footer/footer.component';
import Medium from '../../components/medium/medium.component';


const Projects = () => {
  return (
    <div className="projects-page">
      <Navbar/>
        <div className = 'projects-header'>
          <div className = 'projects-info'>
          <Medium/>
          </div>
        </div>
      <Footer showButton = {true}/>
      </div>
    );
};

export default Projects;