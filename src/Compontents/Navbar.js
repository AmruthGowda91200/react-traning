import React from "react";

const Navbar = () => {
  const userName = JSON.parse(localStorage.getItem("user"));

  return <div>{userName ? userName.name : "User Name"}</div>;
};

export default Navbar;
