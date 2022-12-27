import React, { ChangeEvent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  WhButton,
  GitHubButton,
  KakaoButton,
  SkyButton,
  GoogleButton,
} from "../atoms/Button";
import "../sass/pages/_login.scss";
import Input from "../atoms/Input";
import Header from "../components/Header";
import BokClick from "../atoms/BokClick";

// 위정
import { UserInputInterface } from "./Join";
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ userInfo }: any) => {
  //카카오정보
  const [onNickNameSetting, setOnNickNameSetting] =
    React.useState<boolean>(false);
  const REST_API_KEY = "78b882d931f2a2e937f9edd73d866867";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code `;
  const [userGoogleData, setUserGoogleData] = useState("");

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
    setOnNickNameSetting(true);
  };

  const handleGoogleLogin = () => {
    handleGoogle();
  };

  const handleJoin = () => {
    window.location.href = "/join";
    setOnNickNameSetting(false);
  };
  // console.log(onNickNameSetting);

  //혜빈
  // const [email, onChangeEmail] = useInput("");
  // const [password, onChangePassword] = useInput("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // 위정
  const navigate = useNavigate();

  const [inputs, setInputs] = useState<UserInputInterface>({
    email: "",
    password: "",
  });
  console.log(inputs);

  const { email, password } = inputs;

  const emailCheck = (e: any) => {
    let regex =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;

    if (!e.target.value || regex.test(e.target.value)) setEmailError(false);
    else setEmailError(true);
    setInputs(e.target.value);
    return regex.test(email);
  };

  const onChangePassword = (e: any) => {
    //setPassword(e.target.value);
    //숫자와 문자 포함 형태의 6~12자리
    const regex = /^[A-Za-z0-9]{6,12}$/;
    if (!e.target.value || regex.test(e.target.value)) {
      setPasswordError(false);
    } else setPasswordError(true);
    setInputs(e.target.value);
    return regex.test(password);
  };

  // const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   const { name, value } = e.currentTarget;
  //   setInputs({ ...inputs, [name]: value });
  //   console.log({ ...inputs, [name]: value });
  // };

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(`/${userInfo.uid}/myboard`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="wrap">
      <Header rightChild={<BokClick />} />
      <section>
        <h1 className="ir">로그인</h1>
        <h4 className="txt-intro">HAPPY 2023 !</h4>
        <h2 className="txt-title">우리 모두 복만이</h2>
        <form onSubmit={onSubmit}>
          <Input
            type="email"
            label="이메일"
            placeholder="이메일"
            name="email"
            value={email}
            onChange={emailCheck}
          />
          {emailError && (
            <strong className="txt-error">이메일 형식이 아닙니다.</strong>
          )}
          <Input
            type="password"
            label="비밀번호"
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
          {passwordError && (
            <strong className="txt-error">
              숫자와 문자 포함 형태의 6~12자리입니다.
            </strong>
          )}
          <WhButton type="submit">로그인</WhButton>
        </form>
        <Link className="link-passfind" to={"/findMyPassword"}>
          비밀번호를 잊으셨나요?
        </Link>

        <div className="list-join">
          <KakaoButton onClick={handleKakaoLogin}>카카오로 로그인</KakaoButton>
          <GitHubButton>깃허브로 로그인</GitHubButton>
          <SkyButton onClick={handleJoin}>복만이 가입하기</SkyButton>
        </div>
      </section>
    </div>
  );
};

export default Login;
