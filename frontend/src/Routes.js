import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

export default function CustomRoutes() {
  return (
    <Routes>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Routes>
  );
}