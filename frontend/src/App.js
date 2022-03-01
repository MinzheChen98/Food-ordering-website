import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import CustomRoutes from "./Routes";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Container>
          <Navbar.Brand href="/" className="font-weight-bold text-muted">
            Foodie
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <CustomRoutes />
    </div>
  );
}

export default App;
