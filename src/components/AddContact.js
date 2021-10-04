import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number) && parseInt(number)
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
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact added successfully!");
    history.push("/");
  };
  return (
    <AddContactStyled>
      <div className="row">
        <h1>Add Contact</h1>
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
            <div>
              <button type="submit">Save Contact</button>
            </div>
          </form>
        </div>
      </div>
    </AddContactStyled>
  );
};

const AddContactStyled = styled.section`
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
    button {
      width: 100%;
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

export default AddContact;
