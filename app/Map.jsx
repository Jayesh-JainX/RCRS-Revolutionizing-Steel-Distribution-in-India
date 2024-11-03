// components/Map.jsx
import React from "react";

const MapComponent = () => {
  return (
    <div className="relative m-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14154.032220517416!2d77.3816117!3d28.6289052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8a45d37eeb%3A0xff2f202129262ffd!2sRCRS%20Innovations%20Private%20Limited!5e1!3m2!1sen!2sin!4v1730217933330!5m2!1sen!2sin"
        className="w-full h-[35vh] sm:h-[50vh] m-1 border rounded-lg shadow-lg hover:border-blue-500"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
