import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  //bisa akses komponen yg di wrap dengan msk in props children dan render {children}
  const [Toggle, setToggle] = useState(true);
  return (
    <motion.div
      layout
      style={{ cursor: "pointer" }}
      classname='question'
      onClick={() => setToggle(!Toggle)}
    >
      <motion.h4 layout>{title}</motion.h4>

      {Toggle ? children : ""}

      <div className='faq-line'></div>
    </motion.div>
  );
};

export default Toggle;
