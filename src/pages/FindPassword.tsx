import React from "react";
import Header from "../components/Header";
import BokClick from "../atoms/BokClick";
import Backspace from "../atoms/Backspace";
import Input from "../atoms/Input";
import { WhButton } from "../atoms/Button";

const FindPassword = () => {
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
        />
        <p className="email-errorMsg hidden">
          * 이메일 주소 양식으로 적어주세요.
        </p>
        <p className="email-subMsg">
          가입하신 이메일로 비밀번호를 전송해드립니다.
        </p>
        <WhButton>전송하기</WhButton>
      </section>
    </>
  );
};

export default FindPassword;
