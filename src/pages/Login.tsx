import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

// 위정
import { UserInputInterface } from './Join';
import { appAuth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ userInfo }: any) => {
  const [onNickNameSetting, setOnNickNameSetting] =
    React.useState<boolean>(false);
  const REST_API_KEY = "78b882d931f2a2e937f9edd73d866867";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code `;
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
    setOnNickNameSetting(true);
  };

  const handleJoin = () => {
    window.location.href = "/join";
    setOnNickNameSetting(false);
  };
  console.log(onNickNameSetting);

  // 위정
  const navigate = useNavigate();

  const [inputs, setInputs] = useState<UserInputInterface>({
    email: "",
    password: ""
  })

  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value })
    console.log({ ...inputs, [name]: value });
  }

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(`/${userInfo.uid}/myboard`)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="wrap">
      <Header rightChild={<BokClick />} />
      <section>
        <h1 className="ir">로그인</h1>
        <h4 className="txt-intro">HAPPY 2023 !</h4>
        <h2 className="txt-title">우리 모두 복만이</h2>
        <form onSubmit={onSubmit}>
          <Input type="email" label="이메일" placeholder="이메일" name='email' value={email} onChange={onChange} />
          <Input type="password" label="비밀번호" placeholder="비밀번호" name='password' value={password} onChange={onChange} />
          <WhButton type='submit'>로그인</WhButton>
        </form>
        <Link className="link-passfind" to={"/findMyPassword"}>
          비밀번호를 잊으셨나요?
        </Link>

        <div className="list-join">
          <KakaoButton onClick={handleKakaoLogin}>카카오</KakaoButton>
          <GitHubButton>깃허브</GitHubButton>
          <SkyButton onClick={handleJoin}>복만이 가입하기</SkyButton>
        </div>
      </section>
    </div>
  );
};

export default Login;
