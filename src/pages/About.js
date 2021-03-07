import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
// import framermotion
import { motion } from "framer-motion";
import { pageTransition } from "../Animation";

const About = () => {
  return (
    <motion.div
      exit='exit'
      variants={pageTransition}
      initial='hidden'
      animate='show'
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default About;
