import React from "react";
import { WhButton } from "../atoms/Button";
import "../sass/pages/_join.scss";
import Header from "../components/Header";
import Backspace from "../atoms/Backspace";
import BokClick from "../atoms/BokClick";
import JoinModal from "../components/modal/JoinModal";
const Join = () => {
  const [onSubmit, setOnSubmit] = React.useState<boolean>(false);

  const onSubmitModal = () => {
    setOnSubmit(true);
  };

  return (
    <section className="join-wrap">
      <Header leftChild={<Backspace />} rightChild={<BokClick />} />
      <p className="txt-happy">HAPPY 2023!</p>
      <p className="txt-title">우리 모두 복만이</p>
      <p className="txt-warning">* 수정이 어려우니 신중히 입력해주세요</p>
      <form action="">
        <input type="text" placeholder="닉네임" className="nickname" />
        <input type="text" placeholder="이메일" className="user-email" />
        <input type="text" placeholder="비밀번호" className="user-password" />
        <input
          type="text"
          placeholder="비밀번호 확인"
          className="password-check"
        />
        <WhButton type="button" onClick={onSubmitModal}>
          가입하기
        </WhButton>
        {onSubmit && <JoinModal />}
      </form>
    </section>
  );
};

export default Join;
