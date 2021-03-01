import React from "react";
import Home1 from "../img/home1.png";
// import styled component
import styled from "styled-components";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className='title'>
          <div className='hide'>
            <h2>Lorem ipsum dolor sit amet.</h2>
          </div>
          <div className='hide'>
            <h2>
              Your <span>dreams</span> come
            </h2>
          </div>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sed commodi eveniet hic repellendus harum, placeat atque asperiores
          animi odio, ipsum quo eius earum dignissimos.
        </p>
        <button>Contact Me</button>
      </Description>
      <Image>
        <img src={Home1} alt='cameraman' />
      </Image>
    </About>
  );
}

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
