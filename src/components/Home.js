import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const Home = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!");
  };

  return (
    <HomeStyled>
      <div className="row">
        <div className="col-left">
          <h1>Hi, Welcome!!</h1>
        </div>
        <div className="col-right">
          <Link to="/add">Add Contact</Link>
        </div>
      </div>
      <div className="table">
        <table cellSpacing="0" cellPadding="15">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.number}</td>
                <td>
                  <Link to={`/edit/${contact.id}`}>Edit</Link>
                  <button
                    type="button"
                    onClick={() => deleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.section`
  .table {
    display: flex;
    justify-content: center;
    align-items: center;
    table {
      padding: 2rem;
      border: none;
      text-align: center;
      thead {
        background: #343a40;
        color: white;
      }
      tbody {
        tr {
          transition: all 0.3s ease-in-out;
          :hover {
            background: #e9ecef;
          }

          td {
            color: #343a40;
            a {
              border: none;
              padding: 0.4rem 1.8rem;
              color: white;
              text-decoration: none;
              font-size: 0.918rem;
              background: #343a40;
              border-radius: 0.3rem;
              cursor: pointer;
              margin-right: 1rem;
              transition: all 0.3s ease-in-out;
              :hover {
                background: black;
              }
            }
            button {
              border: 1px solid #343a40;
              padding: 0.36rem 1.2rem;
              color: #343a40;
              background: transparent;
              border-radius: 0.3rem;
              cursor: pointer;
              transition: all 0.3s ease-in-out;
              :hover {
                background: #343a40;
                color: white;
              }
            }
          }
        }
      }
    }
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    .col-left {
      font-size: 2rem;
      margin-right: 4rem;
    }
    .col-right {
      a {
        text-decoration: none;
        color: #343a40;
        font-size: 1.2rem;
        border: 1px solid #343a40;
        padding: 0.4rem 1rem;
        border-radius: 0.3rem;
        transition: all 0.3s ease-in-out;

        :hover {
          background: #343a40;
          color: white;
        }
      }
    }
  }
`;
export default Home;
