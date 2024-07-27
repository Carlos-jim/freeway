import React from "react";
import backgroundImage from "../public/avions-prueba.jpg"; // Asegúrate de que la imagen esté en el directorio src

const BackgroundImgUser = () => {
  return (
    <div>
      <div
        className="bg-cover  bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, height: '22rem', backgroundRepeat: 'no-repeat' }}
      ></div>
    </div>
  );
};

export default BackgroundImgUser;
