import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand>
          <Link to="/" className="link">Meetupz</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav>
              <Link to="/add-meetup" className="link">Add meetup</Link>
            </Nav>
            <Nav>
              <Link to="/about" className="link">About</Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
