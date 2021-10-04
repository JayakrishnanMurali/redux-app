import React from "react";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddContact from "./components/AddContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add">
          <AddContact />
        </Route>
        <Route path="/edit/:id">
          <h1>Edit Component</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
