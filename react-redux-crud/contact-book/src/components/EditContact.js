import React, { useEffect, useState } from "react";
import { Link, useParams,useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  const dispatch= useDispatch();
  const history= useHistory();

  const contacts = useSelector((state) => state);
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const checkEmail= contacts.find(contact=>contact.id!== parseInt(id) && contact.email === email);
    const checkNumber= contacts.find(contact=>contact.id!== parseInt(id) && contact.number === parseInt(number) && contact);
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
      id: parseInt(id),
      name,
      email,
      number,
    }
    dispatch({type: "UPDATE_CONTACT", payload:data})
    toast.success("Student Updated Successfully")
    history.push("/");

  }

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3  text-center mt-5">
            <b>Update Details {id}</b>
          </h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control mb-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control mb-2"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="update Student"
                    className="btn btn-dark "
                  />
                  <Link to="/" className="btn btn-danger m-2 ">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3  text-center mt-5">
          <b>Student Contact with Id {id} does not exist</b>
        </h1>
      )}
    </div>
  );
};

export default EditContact;
