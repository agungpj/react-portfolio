import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { motion } from "framer-motion";
import { pageTransition, fade, photoAnim, lineAnim } from "../Animation";

const Work = () => {
  return (
    <StyledWork
      style={{ background: "#fff" }}
      exit='exit'
      variants={pageTransition}
      initial='hidden'
      animate='show'
    >
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/the-athlete'>
          <motion.img variants={photoAnim} src={athlete} alt='athlete' />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div className='line'></motion.div>
        <Link to='/work/the-racer'>
          <motion.img variants={photoAnim} src={theracer} alt='theracer' />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Good Timess</motion.h2>
        <motion.div className='line'></motion.div>
        <Link to='/work/good-times'>
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt='goodtimes' />
          </Hide>
        </Link>
      </Movie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 10vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
    color: #3d3d3d;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default Work;
