import React, { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { WhButton } from "../atoms/Button";
import "../sass/pages/_join.scss";
import Header from "../components/Header";
import Backspace from "../atoms/Backspace";
import BokClick from "../atoms/BokClick";
import JoinModal from "../components/modal/JoinModal";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { appFireStore, appAuth } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
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

const Join = () => {
  const navigate = useNavigate();
  const linkToLogin = () => {
    navigate('/login')
  }

  const [onSubmit, setOnSubmit] = React.useState<boolean>(false);

  const onSubmitModal = () => {
    setOnSubmit(true);
  };

  const [inputs, setInputs] = useState<UserInputInterface>({
    email: "",
    displayName: "",
    password: "",
    passwordCheck: ""
  })

  const { email, displayName, password, passwordCheck } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value })
    console.log({ ...inputs, [name]: value });
  }

  const onSubmitForm = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(appAuth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);

        await addDoc(collection(appFireStore, 'users'), {
          uid: user.uid,
          ...inputs,
        })
        linkToLogin;
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <section className="join-wrap">
      <Header leftChild={<Backspace />} rightChild={<BokClick />} />
      <p className="txt-happy">HAPPY 2023!</p>
      <p className="join-txt-title">우리 모두 복만이</p>
      <p className="txt-warning">* 수정이 어려우니 신중히 입력해주세요</p>
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder="닉네임" className="nickname" name='displayName' value={displayName} onChange={onChange} />
        <input type="email" placeholder="이메일" className="user-email" name='email' value={email} onChange={onChange} />
        <input type="password" placeholder="비밀번호" className="user-password" name='password' value={password} onChange={onChange} />
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="password-check"
          name='passwordCheck'
          value={passwordCheck}
          onChange={onChange}
        />
        <WhButton type="submit" onClick={onSubmitModal}>
          가입하기
        </WhButton>
        {onSubmit && <JoinModal />}
      </form>
    </section>
  );
};

export default Join;
