import React from "react";
import { useState } from "react";
import { Navbar,Services,Welcome,CAP } from "./components"; 
import { Route, Routes } from "react-router-dom";
const App = () => {

  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
    <Routes>
    <Route path="/CAP" element={<CAP />} />
    </Routes>
    </div>
  )
}

export default App