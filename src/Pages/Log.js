import React, { useState } from "react";

const Log = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ph: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (formData.email === "amruth@gmail.com" && formData.password === "1234") {
    //   console.table("Log success", formData);
    //   setFormData({
    //     name: "",
    //     email: "",
    //     ph: "",
    //     password: "",
    //   });
    //   alert("Log success");
    // } else {
    //     alert("Wrong Cre")
    //     console.error("Wrong Cre")
    // }

    if (userData) {
      if (
        formData.email === userData.email &&
        formData.password === userData.password
      ) {
        console.table("Log success", formData);
        setFormData({
          name: "",
          email: "",
          ph: "",
          password: "",
        });
      } else {
        alert("Wrong Cre");
        console.error("Wrong Cre");
      }
    }
  };
  return (
    <div>
      <h1>Log</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="">
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Login In</button>
      </form>
    </div>
  );
};

export default Log;
