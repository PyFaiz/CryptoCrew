import React from "react";
import { useState } from "react";
import { Navbar,Services,Welcome,CAP,Institute,View,Cert, Loader } from "./components"; 
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
    <Route path="/portal2" element={<Institute />} />
    <Route path="/certificate/c16a1b9c1596de6de71b20d9362490f8" element={<Cert />} />
    <Route path="/portal3" element={<View />} />
    <Route path="*" element={<Loader />} />
    </Routes>
    </div>
  )
}

export default App