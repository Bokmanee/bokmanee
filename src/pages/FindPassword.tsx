import React, { useState } from "react";
import Header from "../components/Header";
import BokClick from "../atoms/BokClick";
import Backspace from "../atoms/Backspace";
import Input from "../atoms/Input";
import { WhButton } from "../atoms/Button";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const FindPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const changePasswordUsingEmail = async () => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      alert("비밀번호 재설정 이메일이 전송되었습니다.");
      setEmailError(false);
    } catch ({ code, message }) {
      setEmailError(true);
    }
  };
  return (
    <>
      <Header leftChild={<Backspace />} rightChild={<BokClick />} />
      <section className="pw-section">
        <h4 className="txt-intro">HAPPY 2023 !</h4>
        <h1 className="txt-title">비밀번호 찾기</h1>
        <Input
          type="text"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {emailError ? (
          <p className="email-errorMsg">* 유효하지 않은 이메일입니다.</p>
        ) : (
          <p className="email-errorMsg hidden">* 유효하지 않은 이메일입니다.</p>
        )}

        <p className="email-subMsg">
          가입하신 이메일로
          <br />
          비밀번호 재설정 링크를 전송해드립니다.
        </p>
        <WhButton onClick={changePasswordUsingEmail}>전송하기</WhButton>
      </section>
    </>
  );
};

export default FindPassword;
