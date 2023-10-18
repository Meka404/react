import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../css/Navigation3.css";
 
export const Navigation2 = () => {
  return (
    <div className="navega3">
    

          <Nav className="navega33 ml-auto">
            <Nav.Link as={Link} to="/react">INICIO</Nav.Link>
            
            <NavDropdown title="SERVICIOS" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/react/tele">INSPECCION TELEVISIVA </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/react/ambiental">SANEAMIENTO AMBIENTAL</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/react/topografia">TOPOGRAFIA INTEGRAL</NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link as={Link} to="/react/proyectos">PROYECTOS</Nav.Link>
            <Nav.Link as={Link} to="/react/ubicanos">UBICANOS</Nav.Link>
          </Nav>
        
   
    </div>
  );
};