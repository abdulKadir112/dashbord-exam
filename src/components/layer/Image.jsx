import React from "react";

const Image = ({ src, alt,  }) => {
  return (
    <div className=" inline-block overflow-hidden">
      <img  src={src} alt={alt} className="block object-cover"/>
    </div>
  );
};

export default Image;
