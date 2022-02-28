import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
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