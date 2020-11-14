
import React from 'react';
import './gettingMe.styles.scss';
import Books from '../../assets/Books.svg';
import Camera from '../../assets/Camera.svg';
import Icecream from '../../assets/Icecream.svg';

import AboutListItem from '../../components/aboutListItem/aboutListItem.component';

const GettingMe = () => {
    const aboutMeItems = [
        {title: "Reading", goal: "Two new books every month", image: Books, paragraphOne: "In my spare time, I love to pick up a book and read for many hours.", paragraphTwo: "Genres that I tend to enjoy include: Autobiographies, Fiction, True Crime, Fantasy", action: "Explore My Reading List", actionLink: '/books'},
        {title: "Cooking and Baking", goal: "One new dish every week", image: Icecream, paragraphOne: "I’m always in the kitchen when I have a chance, and enjoy exloring different food and desserts from all cuisines.", paragraphTwo: "I started a food blog to keep track of all my recipes and share them with friends and family.", action: "My Food Blog: Munchcollective", actionLink: 'https://instagram.com/munchcollective'},
        {title: "Videography and Graphic Design", goal: null, image: Camera,  paragraphOne: "I have a lot of fun learning various editing techniques for photos and videos, and enjoy creating content by filming my cooking and lifestyle.", paragraphTwo: "Some software I use: Photoshop, FinalCut Pro, Adobe Lightroom, Adobe Premiere", action: null, actionLink: null},
    ]
    
    return (
        <div className = 'getting-me-component'>
            <div className = 'getting-me-title'>
                <b>Getting to know me ...</b>
            </div>
            <div className = 'getting-me-list'>
                {aboutMeItems.map((value, index) => {
                    return <AboutListItem  
                                key={index} 
                                title = {value.title}
                                goal = {value.goal}
                                image = {value.image}
                                paragraphOne = {value.paragraphOne}
                                paragraphTwo = {value.paragraphTwo}
                                action = {value.action}
                                actionLink = {value.actionLink}
                            />
                })}
                <div className = 'getting-me-hobbies'>
                    <div className = 'getting-me-first'>
                        And many more...
                    </div>
                    <div className = 'getting-me-second'>
                        Biking, Swimming, Sketching, Painting
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GettingMe;
