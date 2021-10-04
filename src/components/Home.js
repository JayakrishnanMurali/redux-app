import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
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
    </HomeStyled>
  );
};

const HomeStyled = styled.section`
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
