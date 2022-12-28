import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./sass/main.scss";
import AllLayout from "./components/AllLayout";
import ChooseBok from "../src/pages/ChooseBok";
import FindPassword from "../src/pages/FindPassword";
import Join from "../src/pages/Join";
import Login from "../src/pages/Login";
import MyBoard from "../src/pages/MyBoard";
import RegisterBok from "../src/pages/RegisterBok";
import RegisterCompletion from "./pages/RegisterCompletion";
import ReceivedMsg from "./pages/ReceivedMsg";
import Splash from "../src/pages/Splash";
import UserBoard from "../src/pages/UserBoard";
import UserBoardPage from "./pages/UserBoardPage";
import Tutorial from "./pages/Tutorial";
import KaKaoLogin from "./components/KaKaoLogin";
import NickNameSetting from "./pages/NickNameSetting";

import { appAuth, appFireStore } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { UserInterface } from "../src/pages/Join";

function App() {
  const [userInfo, setUserInfo] = useState<UserInterface | any>("");
  // const [init, setInit] = useState<boolean>(false);
  // const [isLogin, setIsLogin] = useState<boolean>(false);

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

  // console.log(isLogin);
  // console.log(appAuth.currentUser);
  // console.log(userInfo);

  return (
    <BrowserRouter>
      <AllLayout>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login userInfo={userInfo} />} />
          <Route path="/kakaoLogin" element={<KaKaoLogin />} />
          <Route path="/join" element={<Join />} />
          <Route path="/nicknamesetting" element={<NickNameSetting />} />
          <Route path="/findMyPassword" element={<FindPassword />} />
          <Route path="/:accountname/myboard" element={<MyBoard />} />
          <Route path="/:accountname/userBoard" element={<UserBoard />} />
          <Route
            path="/:accountname/message_board"
            element={<UserBoardPage userInfo={userInfo} />}
          />
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
        </Routes>
      </AllLayout>
    </BrowserRouter>
  );
}

export default App;
