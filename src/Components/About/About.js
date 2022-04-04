import React from 'react';
import './About.css';
import '../../style.css';
import Image1 from './laptop-image-1.jfif';
import Image2 from './laptop-image-2.jfif';

const About = () => {
  return (
    <div className="about-section">
        <div className="container">
            <h3>About Us</h3>
            <div>
                <div className="inner-about-section">
                    <div className="about-img">
                        <img src={Image1} alt="" />
                    </div>
                    <div className="about-text">
                        <h4>New Things</h4>
                        <p>We are always working for new productivitys. And Always its Update . That's why our product is best. We always update our devices as much as we can.</p>
                        <button className='about-btn'>Explore</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="inner-about-section">
                    <div className="about-text">
                        <h4>World Wide</h4>
                        <p>Our devices are now available worldwide. Our team works hard to improve this. Our office comes to our different places. like canada, singapur, india, japan, Europe</p>
                        <button className='about-btn'>Explore</button>
                    </div>
                    <div className="about-img">
                        <img src={Image2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About