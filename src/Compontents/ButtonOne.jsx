import React from 'react'

const ButtonOne = ({value,bStyle,onClick,children}) => {
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
    <div>
      <button style={bStyle?bStyle:buttonStyle} onClick={onClick} >{children}</button>
    </div>
  )
}

export default ButtonOne
