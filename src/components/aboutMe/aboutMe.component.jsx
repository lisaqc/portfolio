
import React from 'react';
import './aboutList.styles.scss';
import Button from 'react-bootstrap/Button';

const AboutListComponent = (props) => {
    return (
        <div className = 'about-list-item-component'>
            <div className = 'about-list-image'>
                <img src={props.image} className="about-list-item-image" alt="about-list-item-image" />
            </div>
            <div className = 'about-list-description'>
            <div className = 'about-list-title'>{props.title}</div>
                <div className = 'about-list-subtitle'>{props.subtitle ? props.subtitle : ''}</div>
                <div className = 'about-list-body'>{props.body}</div>
                {props.actionText && props.actionLink  &&
                    <Button variant="light" className = 'summary-connect'  href={props.actionLink} rel="noopener noreferrer" target="_blank">
                        <div className = 'about-list-action'>
                            {props.actionText}
                        </div>
                    </Button>
                }
            </div>
        </div>
    );
};

export default AboutListComponent;
