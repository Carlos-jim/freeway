import React from "react";
import backgroundImage from "../public/avion2.avif"; // Asegúrate de que la imagen esté en el directorio src
import { motion } from "framer-motion";
const BackgroundImgUser = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-cover  bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "24rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></motion.div>
    </div>
  );
};

export default BackgroundImgUser;
