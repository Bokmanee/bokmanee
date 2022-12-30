import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WhButton } from "../atoms/Button";
import "../sass/pages/_join.scss";
import Header from "../components/Header";
import Backspace from "../atoms/Backspace";
import BokClick from "../atoms/BokClick";
import JoinModal from "../components/modal/JoinModal";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { appFireStore, appAuth } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
export interface UserInterface {
  uid: string;
  email: string;
  displayName: string;
}
export interface UserInputInterface {
  email: string;
  displayName?: string;
  password: string;
  passwordCheck?: string;
}

interface ErrorMsgInterface {
  emailError: boolean;
  passwordError: boolean;
  passwordCheckError: boolean;
}

const Join = () => {
  const navigate = useNavigate();
  const linkToLogin = () => {
    navigate("/login");
  };

  const [errorMsgs, setErrorMsgs] = useState<ErrorMsgInterface>({
    emailError: false,
    passwordError: false,
    passwordCheckError: false,
  });

  const { emailError, passwordError, passwordCheckError } = errorMsgs;

  const [onSubmit, setOnSubmit] = React.useState<boolean>(false);

  const onSubmitModal = () => {
    setOnSubmit(true);
  };

  const [inputs, setInputs] = useState<UserInputInterface>({
    email: "",
    displayName: "",
    password: "",
    passwordCheck: "",
  });

  const { email, displayName, password, passwordCheck } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value });
    console.log({ ...inputs, [name]: value });
  };

  const onSubmitForm = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(appAuth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);

        await addDoc(collection(appFireStore, "users"), {
          uid: user.uid,
          ...inputs,
        });
        linkToLogin;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="join-wrap">
      <Header leftChild={<Backspace />} rightChild={<BokClick />} />
      <p className="txt-happy">HAPPY 2023!</p>
      <p className="join-txt-title">우리 모두 복만이</p>
      <p className="txt-warning">* 수정이 어려우니 신중히 입력해주세요</p>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="닉네임"
          className="nickname"
          name="displayName"
          value={displayName}
          onChange={onChange}
        />
        <p className="errorMessage hidden">닉네임은 자유룝게 작성가능합니다.</p>
        <input
          type="email"
          placeholder="이메일"
          className="user-email"
          name="email"
          value={email}
          onChange={onChange}
        />
        {emailError ? (
          <p className="errorMessage">* 이메일 형식이 아닙니다.</p>
        ) : (
          <p className="errorMessage hidden">* 이메일 형식이 아닙니다.</p>
        )}

        <input
          type="password"
          placeholder="비밀번호"
          className="user-password"
          name="password"
          value={password}
          onChange={onChange}
        />
        {passwordError ? (
          <p className="errorMessage">
            * 숫자와 문자 포함 형태의 6~12자리입니다.
          </p>
        ) : (
          <p className="errorMessage hidden">
            * 숫자와 문자 포함 형태의 6~12자리입니다.
          </p>
        )}

        <input
          type="password"
          placeholder="비밀번호 확인"
          className="password-check"
          name="passwordCheck"
          value={passwordCheck}
          onChange={onChange}
        />
        {passwordCheckError ? (
          <p className="errorMessage">* 비밀번호가 일치하지 않습니다.</p>
        ) : (
          <p className="errorMessage hidden">* 비밀번호가 일치하지 않습니다.</p>
        )}
        <WhButton type="submit" onClick={onSubmitModal}>
          가입하기
        </WhButton>
        {onSubmit && <JoinModal />}
      </form>
    </section>
  );
};

export default Join;
