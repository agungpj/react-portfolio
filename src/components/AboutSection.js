import React from "react";
import Home1 from "../img/home1.png";
import Wave from "./Wave";
// import framermotion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../Animation";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <div className='hide'>
            <motion.h2>Lorem ipsum dolor sit amet.</motion.h2>
          </div>
          <div className='hide'>
            <motion.h2 variants={titleAnim}>
              Your <span>dreams</span> come
            </motion.h2>
          </div>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sed commodi eveniet hic repellendus harum, placeat atque asperiores
          animi odio, ipsum quo eius earum dignissimos.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img src={Home1} alt='cameraman' variants={photoAnim} />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
