import React, { useState, useEffect, ChangeEvent } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Backspace from '../atoms/Backspace';
import BokClick from '../atoms/BokClick';
import Board from '../atoms/Board';
import Header from '../components/Header';
import Message from '../components/Message';

import { appAuth, appFireStore } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

import { UserInterface } from './Join';

type MessageFormType = {
  userInfo: UserInterface;
}
export interface MessageInputInterface {
  message: string,
  id?: string,
  uid?: string,
  email?: string | any,
  nickName?: string,
}

const RegisterBok = ({ userInfo }: MessageFormType) => {
  console.log(userInfo);
  const location = useLocation();
  console.log(location.state);
  const nickname = location.state

  const navigate = useNavigate();

  const [inputs, setInputs] = useState<MessageInputInterface>({
    message: ""
  })

  const { message } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value });
  }

  const onClick = async () => {
    if (message === "") {
      alert('메세지를 입력해주세요')
      return false;
    }
    navigate('/registerCompletion', {
      state: { message }
    });
    await addDoc(collection(appFireStore, 'message'), {
      uid: userInfo.uid,
      message: message,
      email: userInfo.email,
      nickName: nickname,
    })
  }


  return (
    <>
      <Header
        leftChild={<Backspace />}
        rightChild={<BokClick />} />
      <Board
        username={userInfo.displayName}
        message1='님에게'
        message2='새해 응원 메시지를 남겨보세요 !'
        children='* 수정이 어려우니 신중히 입력해주세요'
      />
      <Message
        isReadOnly={false}
        onClick={onClick}
        onChange={onChange}
        value={message}
        name='message'
      />
    </>
  );
};

export default RegisterBok;
