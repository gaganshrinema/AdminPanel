import React from "react";
import { ListGroup } from "react-bootstrap";
import "./style.css";
const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ListGroup as="ul" className="sidebar-nav" id="sidebar-nav">
        <ListGroup.Item as="li" className="nav-item">
          <a className="nav-link ">
            <i className="bi bi-grid" />
            <span>Dashboard</span>
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="nav-item">
          <a class="nav-link collapsed">
            <i class="bi bi-person"></i>
            <span>Profile</span>
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="nav-item">
          <a class="nav-link collapsed" href="pages-contact.html">
            <i class="bi bi-envelope"></i>
            <span>Contact</span>
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="nav-item">
          <a class="nav-link collapsed" href="pages-register.html">
            <i class="bi bi-card-list"></i>
            <span>Register</span>
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="nav-item">
          <a class="nav-link collapsed" href="pages-login.html">
            <i class="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </a>
        </ListGroup.Item>
      </ListGroup>
    </aside>
  );
};

export default Sidebar;
