import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./sass/main.scss";
import AllLayout from "./components/AllLayout";
import ChooseBok from "../src/pages/ChooseBok";
import FindPassword from "../src/pages/FindPassword";
import Join from "../src/pages/Join";
import Login from "../src/pages/Login";
import MyBoard from "../src/pages/MyBoard";
import RegisterBok from "../src/pages/RegisterBok";
import RegisterCompletion from './pages/RegisterCompletion';
import Share from "../src/pages/Share";
import Splash from "../src/pages/Splash";
import UserBoard from "../src/pages/UserBoard";
import Tutorial from "./pages/Tutorial";

function App() {
  return (
    <BrowserRouter>
      <AllLayout>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/findMyPassword" element={<FindPassword />} />
          <Route path="/chooseBokPouch" element={<ChooseBok />} />
          <Route path="/registerMessage" element={<RegisterBok />} />
          <Route path="/registerCompletion" element={<RegisterCompletion />} />
          <Route path="/myBoard" element={<MyBoard />} />
          <Route path="/userBoard" element={<UserBoard />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/shareBySNS" element={<Share />} />
        </Routes>
      </AllLayout>
    </BrowserRouter>
  );
}

export default App;
