import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar";
import UsersList from "./components/users-list";
import EditUser from "./components/edit-user";
import AddUser from "./components/add-user";
import ShowUser from "./components/show-user";

function App() {
  return (
    <Router>
      <div className="container">       
        <Navbar />
        <hr />
        <div className="pa3 pa4-ns">  
          <Route path="/" exact component={UsersList} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/user/:id" component={ShowUser} />
          <Route path="/add" component={AddUser} />
        </div>
      </div>
    </Router>
  );
 }
  
 export default App;
