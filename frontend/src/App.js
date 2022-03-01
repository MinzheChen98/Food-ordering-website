import * as React from "react";
// import { Route, Link } from "react-router-dom";
// import Link from "react-router-dom";
// import SignUp from "./pages/sign-up";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import CustomRoutes from "./Routes";
import Nav from "react-bootstrap/Nav";
// import { Container } from "react-router-bootstrap";
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
      {/* <CustomRoutes /> */}
    </div>
  );
}

// TODO: Delete these functions and import home/login pages.
// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the food delivery app!</h2>
//       </main>
//       <nav>
//         <Link to="/login">Login</Link>
//       </nav>
//       <nav>
//         <Link to="/signup">Sign Up</Link>
//       </nav>
//     </>
//   );
// }

// function Login() {
//   return (
//     <>
//       <main>
//         <h2>Please Login to the food delivery app!</h2>
//       </main>
//       <nav>
//         <Link to="/signup">Sign Up</Link>
//       </nav>
//     </>
//   );
// }

export default App;
