import React from "react";
import Navbar from "./Navbar";
import SignUP from "./SignUp";
import Login from "./Login";
import Footer from "./Footer";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />

      <div className="d-flex justify-content-evenly py-4">
        <SignUP />
        <Login />
      </div>

      <Footer />
    </div>
  );
}

export default App;
