import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <div className="overflow-auto">
        <nav className="ph4 pv3 f6 w-100 mw8 center">
          <h2 className="link dim black b dib mr4">CardioHub</h2>
          <Link to="/" className="link dim black f6 f5-ns dib mr3">Patients List</Link>
          <Link to="/add" className="link dim black f6 f5-ns dib">Create New Case</Link>
        </nav>
      </div>
    );
  }
}