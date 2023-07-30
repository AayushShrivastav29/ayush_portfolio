import React, { useState } from "react";
import profilePic from "../assets/Ayush portfolio image.jpeg"
const ProfilePicture = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverStyles = {
    width: "70vmin",
    height: "calc(90vmin * 9 / 16)",
    margin: "auto",
    overflow: "hidden",
    boxShadow: "0 1.25em 1em -0.5em #0005",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "center",
    objectPosition: "0% 50%",
    transition: "transform 1s",
    transform: isHovered ? "translateX(-3%)" : "none",
    transitionDuration: isHovered ? "5s" : "1s",
  };

  return (
    <div
      className="c"
      style={hoverStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="i">
        <img
          src={profilePic}
          alt="Profile"
          className="img"
          style={imageStyles}
        />
      </div>
      <div className="s1"></div>
      <div className="s2"></div>
      <div className="s3"></div>
    </div>
  );
};

export default ProfilePicture;
