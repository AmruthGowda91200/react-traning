import React from "react";
import ButtonOne from "../Compontents/ButtonOne";

const Contact = () => {
    const buttonStyle = {
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        textTransform: "lowercase",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        margin: "10px",
      };

      const click = (()=>{
        console.log("clicked")
      })

  return (
    <div>
      <ButtonOne value="h" bStyle={buttonStyle} onClick={click}>Contact</ButtonOne>
    </div>
  );
};

export default Contact;
