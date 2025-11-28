// components/Map.jsx
import React from "react";

const MapComponent = () => {
  return (
    <div className="relative m-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1781.1483001499469!2d82.17532221824646!3d26.766813882319873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ2JzAyLjMiTiA4MsKwMTAnMzQuOCJF!5e0!3m2!1sen!2sin!4v1764329711944!5m2!1sen!2sin"
        className="w-full h-[35vh] sm:h-[50vh] m-1 border rounded-lg shadow-lg hover:border-blue-500"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
