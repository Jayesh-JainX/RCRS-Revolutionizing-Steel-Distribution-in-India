// components/Map.jsx
import React from "react";

const MapComponent = () => {
  return (
    <div className="relative m-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1799.6967454373014!2d82.175863!3d26.767141000000002!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ2JzAyLjMiTiA4MsKwMTAnMzQuOCJF!5e1!3m2!1sen!2sin!4v1764340005585!5m2!1sen!2sin"
        className="w-full h-[35vh] sm:h-[50vh] m-1 border rounded-lg shadow-lg hover:border-blue-500"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
