
import React from 'react';
import './summary.styles.scss';
import Typical from 'react-typical';
import image from '../../assets/image.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Summary = () => {
    return (
        <div className = 'summary-component'>
            <div className = 'summary-header'>
                <ReactCSSTransitionGroup className = 'summary-headshots'
                    transitionName="example" transitionAppear={true}
                    transitionAppearTimeout={700}>
                    <img src={image} className="summary-headshot" alt="headshot" />
                </ReactCSSTransitionGroup>
                <div className = 'summary-description'>
                    <div className = 'summary-text large'>Hello!&nbsp;</div>
                    <div className = 'summary-text medium'>I am a&nbsp;
                        <Typical 
                            loop={Infinity}
                            wrapper='b'
                            steps={[
                            'Product Manager 💻', 
                            1000,
                            'Content Creator 📸',
                            1000,
                            'Cooking Enthusaist 🍰',
                            1000
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className = 'summary-info'>
                <div className = 'summary-paragraphs'>
                    <div className = 'summary-paragraph'>
                        My name is Lisa Chen and I’m an aspiring product manger with a background in management, digital marketing and user research. I’m passionate about problem solving and bringing solutions to life in creative ways.                    
                    </div>
                    <div className = 'summary-paragraph'>
                        I’m currently based in <b>Toronto, Canada.</b>                  
                    </div>
                    <div className = 'summary-paragraph'>
                        Currently, I worked at American Express as a <b>Product Marketing Manager</b> focused on the Early Engagement portion ofthe customer journey. 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
