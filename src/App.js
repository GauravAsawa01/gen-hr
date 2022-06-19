import React from "react";
import SignIn from "./components/SignIn";
import User from "./components/User";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<SignIn />} />
        <Route path="/admin" index element={<Admin />} />
        <Route path="/user" index element={<User />} />
        {/* <Route path="/about" index element={<About />} /> */}
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
