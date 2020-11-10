
import React from 'react';
import './projects.styles.scss';
import Navbar from '../../components/navbar/navbar.component'
import Footer from '../../components/footer/footer.component';


const Projects = () => {
  return (
    <div className="projects-page">
      <Navbar/>
        <div className = 'projects-header'>
          <div className = 'projects-info'>
          </div>
        </div>
      <Footer/>
      </div>
    );
};

export default Projects;