import React, { ChangeEvent, useState, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import NickNameSetting from "./NickNameSetting";

const Login = () => {
  const navigate = useNavigate();
  //카카오정보
  const [onNickNameSetting, setOnNickNameSetting] =
    React.useState<boolean>(false);

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code `;

  const [googleEmail, setGoogleEmail] = useState<string | null>("");
  const [googleUid, setGoogleUid] = useState<string | null>("");

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
    setOnNickNameSetting(true);
  };

  const handleGoogleLogin = () => {
    // handleGoogle();
    //파이어베이스로 구글 로그인
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(appAuth, provider) // popup을 이용한 signup
      .then((data) => {
        console.log(data); // console로 들어온 데이터 표시
        setGoogleEmail(data.user.email);
        setGoogleUid(data.user.uid);
        // LinkToNick();
      })
      .catch((err) => {
        console.log(err);
      });

    setOnNickNameSetting(true);
  };
  if (googleEmail !== "" && googleUid !== "") {
    navigate("/nicknamesetting", {
      state: { googleEmail, googleUid },
    });
  }

  // const LinkToNick = () => {
  //   navigate("/nicknamesetting", {
  //     state: { googleEmail, googleUid },
  //   });
  // };

  const handleJoin = () => {
    window.location.href = "/join";
    setOnNickNameSetting(false);
  };

  //혜빈
  // const [email, onChangeEmail] = useInput("");
  // const [password, onChangePassword] = useInput("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // 위정
  // const location = useLocation();
  // const userInfos = location.state;
  // console.log(location.state);

  const [inputs, setInputs] = useState<UserInputInterface>({
    email: "",
    password: "",
  });
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

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value });
    console.log({ ...inputs, [name]: value });
  };

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        console.log(user);
        navigate(`/main`)
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
            onChange={onChange}
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
            onChange={onChange}
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
          <GoogleButton onClick={handleGoogleLogin}>구글로 로그인</GoogleButton>
          <SkyButton onClick={handleJoin}>복만이 가입하기</SkyButton>

          {onNickNameSetting ? (
            <NickNameSetting googleEmail={googleEmail} googleUid={googleUid} />
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Login;
