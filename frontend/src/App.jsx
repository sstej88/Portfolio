/** @format */

import React from "react";
import Index from "./Component Trees/Index/Index";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Maps from "./components/Maps/Maps";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index />}></Route>
          <Route path="/location" element={<Maps />} />
          <Route path="*" element={<Navigate to="/index" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
