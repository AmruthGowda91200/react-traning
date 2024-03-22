import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Compontents/Button";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    margin: "10px",
    backgroundColor: isHovered ? "rgb(110 141 12)" : "rgb(68 162 94)",
    color: "rgb(178 75 75)",
  };

  const handleClick = (value) => {
    console.log(value); // You can do whatever you want with the value here
  };

  return (
    <div>
      {/* <Button>hi</Button> */}
      <Button
        value="hxcdcdf"
        style={buttonStyle}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      Home
      <Link to="/aboutus">About Us</Link>
    </div>
  );
};

export default Home;
