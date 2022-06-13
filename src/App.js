import React from "react";
import Popular from "./components/PopularRepository/Popular";
//react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserInfo from "./components/UserRepositoey/UserInfo/UserInfo";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/*" element={<UserInfo />}></Route>
        <Route path="/popular-most" element={<Popular />}></Route>
        <Route path="*" element={<Navigate to="/users" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
