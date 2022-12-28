import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { appAuth } from "../firebase/config";

const handleGoogle = () => {
  const [googleEmail, setGoogleEmail] = useState<string | null>("");
  const [googleUid, setGoogleUid] = useState<string | null>("");
  const [googleDisplayName, setGoogleDisplayName] = useState<string | null>("");
  // const navigate = useNavigate();
  const provider = new GoogleAuthProvider(); // provider를 구글로 설정
  signInWithPopup(appAuth, provider) // popup을 이용한 signup
    .then((data) => {
      // setUserGoogleData(data.user); // user data 설정
      console.log(data); // console로 들어온 데이터 표시
      console.log(data.user.email); // email
      console.log(data.user.uid); // email
      console.log(data.user.displayName); // email
      console.log(data.user); // email
      // navigate("/nicknamesetting");
      setGoogleEmail(data.user.email);
      setGoogleUid(data.user.uid);
      setGoogleDisplayName(data.user.displayName);
      // window.location.href = "/nicknamesetting";
    })
    .catch((err) => {
      console.log(err);
    });
};

function GoogleLogin() {
  return <div>GoogleLogin</div>;
}

export { GoogleLogin, handleGoogle };
