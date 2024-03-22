import React from "react";

const Button = ({ onClick, children, style, className,onMouseEnter, onMouseLeave, value }) => {
  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    margin: "10px",
  };

  return (
    <button
      className={className}
      style={style ? style : buttonStyle}
      onClick={() => onClick(value)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {value}
    </button>
  );
};

export default Button;
