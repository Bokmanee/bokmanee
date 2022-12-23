import React from "react";
import { Link } from "react-router-dom";
import {
  WhButton,
  GitHubButton,
  KakaoButton,
  SkyButton,
} from "../atoms/Button";
import "../sass/pages/_login.scss";
import Input from "../atoms/Input";
import Header from "../components/Header";
import BokClick from "../atoms/BokClick";

const Login = () => {
  return (
    <div className="wrap">
      <Header rightChild={<BokClick />} />
      <section>
        <h1 className="ir">로그인</h1>
        <h4 className="txt-intro">HAPPY 2023 !</h4>
        <h2 className="txt-title">우리 모두 복만이</h2>
        <Input type="text" label="이메일" placeholder="이메일" />
        <Input type="password" label="비밀번호" placeholder="비밀번호." />
        <WhButton>로그인</WhButton>
        <Link className="link-passfind" to={"/findMyPassword"}>
          비밀번호를 잊으셨나요?
        </Link>

        <div className="list-join">
          <KakaoButton>카카오</KakaoButton>
          <GitHubButton>깃허브</GitHubButton>
          <SkyButton>복만이 시작하기</SkyButton>
        </div>
      </section>
    </div>
  );
};

export default Login;
