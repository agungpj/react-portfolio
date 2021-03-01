import React from "react";
// import icons
import clock from "../img/clock.svg";
import diagram from "../img/diagram.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className='services'>
      <div className='description'>
        <h2>
          High <span>quality</span> Services.
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <img src={clock} alt='clock' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={diagram} alt='diagram' />
              <h3>Diagram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={money} alt='money' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={teamwork} alt='teamwork' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='image'>
          <img src={home2} alt='camera' />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
