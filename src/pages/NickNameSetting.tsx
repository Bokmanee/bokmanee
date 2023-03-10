import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Backspace from "../atoms/Backspace";
import BokClick from "../atoms/BokClick";
import { WhButton } from "../atoms/Button";
import Header from "../components/Header";
import JoinModal from "../components/modal/JoinModal";
import { appAuth, appFireStore } from "../firebase/config";
import { UserInputInterface, UserInterface } from "./Join";

interface Googleinfo {
  googleEmail?: string | null;
  googleUid?: string | null;
  displayName?: string;
}

// interface Google

function NickNameSetting({ googleEmail, googleUid }: Googleinfo) {
  const [onSubmit, setOnSubmit] = React.useState<boolean>(false);
  const [googleDisplayName, setGoogleDisplayName] = useState<string>("");
  const [GoogleJoinInfo, setGoogleJoinInfo] = useState<Googleinfo>({
    displayName: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const data = location.state;

  const handleNickName = (e: any) => {
    setGoogleDisplayName(e.target.value);
  };
  const onSubmitModal = () => {
    setOnSubmit(true);
    // navigate("/myboard");
    localStorage.setItem("nickName", googleDisplayName);
  };

  const { displayName } = GoogleJoinInfo;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setGoogleJoinInfo({ ...GoogleJoinInfo, [name]: value });
  };
  console.log(GoogleJoinInfo);

  const onClick = async () => {
    if (displayName === "") {
      alert("닉네임을 적어주세요");
      return false;
    } else {
      setOnSubmit(true);
    }
    navigate(`/${data.googleEmail.split("@")[0]}/message_board`);
    await addDoc(collection(appFireStore, "users"), {
      displayName: displayName,
      email: data.googleEmail,
      uid: data.googleUid,
    });
  };

  return (
    <section className="join-wrap">
      <Header leftChild={<Backspace />} rightChild={<BokClick />} />
      <p className="txt-happy">HAPPY 2023!</p>
      <p className="join-txt-title">우리 모두 복만이</p>
      <p className="txt-warning">* 수정이 어려우니 신중히 입력해주세요</p>
      <form action="">
        <input
          type="text"
          placeholder="닉네임"
          className="nickname"
          onChange={onChange}
          name="displayName"
        />
        <WhButton type="button" onClick={onClick}>
          가입하기
        </WhButton>
        {onSubmit && <JoinModal />}
      </form>
    </section>
  );
}

export default NickNameSetting;
