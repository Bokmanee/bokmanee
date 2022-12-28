import React, { useState } from "react";
import { useNavigate } from "react-router";
import Backspace from "../atoms/Backspace";
import BokClick from "../atoms/BokClick";
import { WhButton } from "../atoms/Button";
import Header from "../components/Header";
import JoinModal from "../components/modal/JoinModal";

interface Googleinfo {
  googleEmail: string | null;
  googleUid: string | null;
}

function NickNameSetting({ googleEmail, googleUid }: Googleinfo) {
  const [onSubmit, setOnSubmit] = React.useState<boolean>(false);

  // const [nickName, setNickName] = useState("");
  const [googleDisplayName, setGoogleDisplayName] = useState<string>("");

  const handleNickName = (e: any) => {
    setGoogleDisplayName(e.target.value);
  };
  const onSubmitModal = () => {
    setOnSubmit(true);
    // navigate("/myboard");
    localStorage.setItem("nickName", googleDisplayName);
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
          onChange={handleNickName}
        />
        <WhButton type="button" onClick={onSubmitModal}>
          가입하기
        </WhButton>
        {onSubmit && <JoinModal />}
      </form>
    </section>
  );
}

export default NickNameSetting;
