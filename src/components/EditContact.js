import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const EditContact = () => {
  const { id } = useParams();
  return (
    <EditContactStyled>
      <div className="row">
        <h1>Edit Contact {id}</h1>
        <div className="container">
          <form>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="btn-group">
              <button type="submit">Update Contact</button>
              <Link to="/">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
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
