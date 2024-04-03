import React, { useState } from "react";
import "../Styles/Navbar.css"
import { useNavigate } from "react-router-dom";
import { FaUser } from 'react-icons/fa'


const Navbar = () => {
  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
   navigate("/Reg")
   setShowPopup(false)
  };

  const userName = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <div className="navbar">
    {userName ? (
      <div className="person-icon" onClick={togglePopup}>{userName.name.charAt(0).toUpperCase()}</div> // You can replace this with any other JSX you want to render if userName doesn't exist
      ) : (
        <FaUser className="person-icon" onClick={togglePopup} />
    )}
</div>
      {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <div>{userName ? userName.name : "User Name"}</div>
              <button onClick={handleLogout}>{userName? "Log Out": "Log In"}</button>
            </div>
          </div>
        )}
    </div>
  );
};

export default Navbar;
