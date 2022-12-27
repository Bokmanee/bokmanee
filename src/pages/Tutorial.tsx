import React from "react";
import { useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();

  return (
    <section className="tutorial-box">
      <p>우리 모두 복만이</p>
      <pre>
        2023년 새해를 맞아
        <br />
        복을 나누는 토끼 '복만이'가 되어
        <br />
        친구들과 새해 응원 메세지를 나눠보세요!
        <br />
        <br />
        이용방법
        <br />
        1. 복만이가 되어서 SNS에 링크를 공유해요.
        <br />
        2. 편지를 받으면 복주머니가 생성돼요.
        <br />
        3. 받은 편지는 2023. 01. 01 에 열 수 있어요.
        <br />
        * 작성한 편지는 수정, 삭제가 불가능합니다.
        <br />
        * 비밀번호 찾기는 가능하지만 이메일을
        <br />
        잃어버리시거나 잘못 입력해서 가입하신경우,
        <br />
        새로 가입하셔야 합니다.
      </pre>
      <button onClick={() => navigate(-1)}>
        <span className="ir">사용설명서 닫기</span>
      </button>
      <div className="bokmanee1"></div>
      <div className="bokmanee2"></div>
      <div className="bokmanee3"></div>
      <span className="team-name">Team i-dle</span>
    </section>
  );
};

export default Tutorial;
