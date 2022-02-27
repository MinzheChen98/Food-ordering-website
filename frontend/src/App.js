import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SingUp from "./pages/sign-up";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SingUp />} />
      </Routes>
    </div>
  );
}

// TODO: Delete this function and import login page/
function Login() {
  return (
    <>
      <main>
        <h2>Welcome to the food dilivery app!</h2>
        <p>Please Login</p>
      </main>
      <nav>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </>
  );
}

export default App;