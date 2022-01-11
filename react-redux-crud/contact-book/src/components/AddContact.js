import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./Add.css";

const AddContact = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [number,setNumber]=useState("")

  const contacts= useSelector((state)=>state)
  const dispatch= useDispatch();
  const history= useHistory();


  const handleSubmit=(e)=>{
    e.preventDefault();
    const checkEmail= contacts.find(contact=>contact.email === email && contact);
    const checkNumber= contacts.find(contact=>contact.number === parseInt(number) && contact);
    console.log(checkNumber);

    if(!name || !email || !number){
      return toast.warning("Please fill in all fields!!")
    }

    if(checkEmail){
      return toast.error("This Email Id already Exist")
    }
    if(checkNumber){
      return toast.error("This Number already Exist")
    }

    const data={
      id: contacts[contacts.length-1].id+1,
      name,
      email,
      number,
    }
    dispatch({type: "ADD_CONTACT", payload:data})
    toast.success("Student Added Successfully")
    history.push("/");

  }


  return (
    <div className="container">
      <h1 className="display-3  text-center mt-5">
        <b>Add Student</b>
      </h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control mb-2" value={name} onChange={e=>setName(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-2"value={email} onChange={e=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control mb-2" value={number} onChange={e=>setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark form-control"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
