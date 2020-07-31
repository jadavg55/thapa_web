import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import {Navbar, Nav,} from 'react-bootstrap';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Footer from "./Component/Footer";


const App = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">Thapa Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink activeClassName="menu_active" className="nav-link" to="/" exact>
              Home
            </NavLink>
            <NavLink activeClassName="menu_active" className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink activeClassName="menu_active" className="nav-link" to="/Service">
              Services
            </NavLink>
            <NavLink activeClassName="menu_active" className="nav-link" to="/Contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Service" component={Service} />
        <Route path="/Contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      
      <Footer />
    </>
  );
};

export default App;
