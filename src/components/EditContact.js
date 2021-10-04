import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import styled from "styled-components";

const EditContact = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields");
    }

    if (checkEmail) {
      return toast.error("Email already exist!!");
    }
    if (checkNumber) {
      return toast.error("Mobile Number already exist!!");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact updated successfully!");
    history.push("/");
  };

  return (
    <EditContactStyled>
      {currentContact ? (
        <div className="row">
          <h1>Edit Contact {id}</h1>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="btn-group">
                <button type="submit">Update Contact</button>
                <Link to="/">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
          {alert("Invalid Contact")}
          <h1>404 Page Not Found</h1>
        </>
      )}
    </EditContactStyled>
  );
};

const EditContactStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
  .container {
    padding: 2rem;
    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
    input {
      width: 20rem;
      height: 2rem;
      margin-bottom: 2rem;
      font-size: 0.918rem;
      color: #343a40;
      outline: none;
      border: 1px solid #343a40;
      padding-left: 0.4rem;
    }
    .btn-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        width: 9rem;
        height: 2.4rem;
        border: 1px solid #343a40;
        color: #343a40;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        border-radius: 0.3rem;
        cursor: pointer;
        font-size: 1rem;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        :hover {
          background: #343a40;
          color: white;
        }
      }
    }
    button {
      width: 9rem;
      height: 2.4rem;
      border: none;
      color: white;
      background: #343a40;
      border-radius: 0.3rem;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease-in-out;
      :hover {
        background: black;
      }
    }
  }
`;

export default EditContact;
