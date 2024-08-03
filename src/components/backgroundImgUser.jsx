import React from "react";
import backgroundImage from "../public/avion2.avif"; // Asegúrate de que la imagen esté en el directorio src

const BackgroundImgUser = () => {
  return (
    <div>
      <div
        className="bg-cover  bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, height: '28rem', backgroundRepeat: 'no-repeat' }}
      ></div>
    </div>
  );
};

export default BackgroundImgUser;
