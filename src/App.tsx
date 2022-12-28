import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./sass/main.scss";
import AllLayout from "./components/AllLayout";
import ChooseBok from "../src/pages/ChooseBok";
import FindPassword from "../src/pages/FindPassword";
import Join from "../src/pages/Join";
import Login from "../src/pages/Login";
import LoginCheck from "./pages/LoginCheck";
import MyBoard from "../src/pages/MyBoard";
import RegisterBok from "../src/pages/RegisterBok";
import RegisterCompletion from "./pages/RegisterCompletion";
import ReceivedMsg from "./pages/ReceivedMsg";
import Splash from "../src/pages/Splash";
import UserBoard from "../src/pages/UserBoard";
import Tutorial from "./pages/Tutorial";
import KaKaoLogin from "./components/KaKaoLogin";
import NickNameSetting from "./pages/NickNameSetting";

import { appAuth, appFireStore } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { UserInterface } from "../src/pages/Join";
import Error404 from "./pages/Error404";

function App() {
  const [userInfo, setUserInfo] = useState<UserInterface | any>("");

  useEffect(() => {
    onAuthStateChanged(appAuth, async (user) => {
      if (user) {
        const q = query(
          collection(appFireStore, "users"),
          where("uid", "==", user.uid),
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setUserInfo({
            uid: data.uid,
            email: data.email,
            displayName: data.displayName,
          });
        });
      }
    });
  }, []);

  // 유저 uid 토큰으로 사용
  localStorage.setItem("token", userInfo.uid);
  // console.log(userInfo);

  return (
    <BrowserRouter>
      <AllLayout>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/main" element={<LoginCheck userInfo={userInfo} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kakaoLogin" element={<KaKaoLogin />} />
          <Route path="/join" element={<Join />} />
          <Route path="/nicknamesetting" element={<NickNameSetting />} />
          <Route path="/findMyPassword" element={<FindPassword />} />
          <Route path="/:accountname/userBoard" element={<UserBoard />} />
          <Route path="/:accountname/message_board" element={<MyBoard />} />
          <Route
            path="/chooseBokPouch"
            element={<ChooseBok userInfo={userInfo} />}
          />
          <Route
            path="/registerMessage"
            element={<RegisterBok userInfo={userInfo} />}
          />
          <Route
            path="/registerCompletion"
            element={<RegisterCompletion userInfo={userInfo} />}
          />
          <Route path="/receivedMessage_from/:who" element={<ReceivedMsg />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </AllLayout>
    </BrowserRouter>
  );
}

export default App;
