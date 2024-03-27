import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reg = () => {
    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        ph:"",
        password:""
    })

    // const handleChange = (e)=>{
    //     const {name,value} = e.target;
    //     setFormData((prevData)=>({
    //         ...prevData,
    //         [name]:value
    //     }))
    // }


    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.table("Reg complete",formData)
        setFormData({
            name:"",
            email:"",
            ph:"",
            password:""
        })
        alert("Reg Complete")
        navigate("/home")
    }
    

    // const [name,setName] = ("");


  return (
    <div>
      <h1>Reg</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name
          <input type="text" name="name" value={formData.name} required onChange={handleChange} />
        </label>
        <br /><br />
        <label htmlFor="">
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br /><br />
        <label htmlFor="">
          Pn No
          <input type="number" name="ph" value={formData.ph} onChange={handleChange} />
        </label>
        <br /><br />
        <label htmlFor="">
          Password
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Reg;
