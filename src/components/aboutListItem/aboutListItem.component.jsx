
import React from 'react';
import './aboutListItem.styles.scss';
import Button from 'react-bootstrap/Button';

const AboutListComponent = (props) => {
    return (
        <div className = 'about-list-item-component'>
            <div className = 'about-list-pic'>
                <img src={props.image} className="about-list-item-pic" alt="about-list-item-pic" />
            </div>
            <div className = 'about-list-description'>
            <div className = 'about-list-title'>{props.title}</div>
                {props.goal &&
                    <div className = 'about-list-subtitle'>Goal: {props.goal}</div>
                }
                {!props.goal &&
                    <div className = 'about-list-subtitle'></div>
                }
                <div className = 'about-list-body'>
                    <div className = 'about-list-paragraph'>{props.paragraphOne}</div>
                    <div className = 'about-list-paragraph'>{props.paragraphTwo}</div>
                </div>
                {props.action &&
                    <Button variant="outline-light" className = 'about-connect' href={props.actionLink} rel={props.rel} target={props.target}>
                        <div className = 'about-list-action'>
                            {props.action}
                        </div>
                    </Button>
                }
            </div>
        </div>
    );
};

export default AboutListComponent;
