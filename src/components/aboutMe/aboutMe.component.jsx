
import React from 'react';
import './aboutMe.styles.scss';
import Work from '../../assets/Work.svg';

const AboutMe = (props) => {
    return (
        <div className = 'about-me-component'>
            <div className = 'about-me-image'>
                <img src={Work} className="about-me-image" alt="about-me-image" />
            </div>
            <div className = 'about-me-description'>
                <div className = 'about-me-body'>
                    Currently, I worked at <b>American Express</b> as a <b>Product Marketing Manager</b> focused on the Early Engagement portion ofthe customer journey. My goal is to make the onboarding process as smooth as possible for a new cardmember in all the platforms they may use. This includes the multiple digital activation journeys, as well as the onboarding marketing curriculum.
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
