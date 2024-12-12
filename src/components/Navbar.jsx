import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar color="danger" dark expand="md" className="custom-navbar">
      <NavbarBrand href="/" className="navbar-brand">Car Model</NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink href="/" className="nav-link">Ana Sayfa</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about" className="nav-link">Hakkımızda</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/communication" className="nav-link">İletişim</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
