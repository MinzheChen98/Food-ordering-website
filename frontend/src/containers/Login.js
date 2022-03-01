import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { loginAPI } from "../client/user";
import { useNavigate } from 'react-router-dom';
import Alert from "react-bootstrap/Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFailMsg, setShowFailMsg] = useState(false);


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  const nav = useNavigate();

  const toHome = () => {
    nav('/');
  }
  function handleSubmit(event) {
    event.preventDefault();
    const loginParams = {
      email: email,
      password: password,
    };
    loginAPI(loginParams).then(toHome).catch(() => setShowFailMsg(true));
  }

  return (
    <div className="Login">
      <Alert variant='danger' show={showFailMsg}>
        Failed! Please check your email and password.
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}