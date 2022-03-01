import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./pages/sign-up";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Scratch
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

// TODO: Delete these functions and import home/login pages.
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the food delivery app!</h2>
      </main>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      <nav>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </>
  );
}

function Login() {
  return (
    <>
      <main>
        <h2>Please Login to the food delivery app!</h2>
      </main>
      <nav>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </>
  );
}

export default App;
