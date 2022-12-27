import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Backspace from '../atoms/Backspace';
import BokClick from '../atoms/BokClick';
import Board from '../atoms/Board';
import Header from '../components/Header';
import Message from '../components/Message';
import "../sass/pages/_registerBok.scss";
export interface messageInterface {
  contents: string;
}

const RegisterBok = ({ userInfo }: any) => {
  console.log(userInfo);

  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();
  const linkToRegisterCompletion = () => {
    navigate('/registerCompletion', {
      state: { message }
    });
  }

  const onChange = (event: any) => {
    setMessage(event.target.value);
  }

  console.log('message', message);



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
        onClick={linkToRegisterCompletion}
        onChange={onChange}
      />
      <div style={{ color: 'white' }}>
        {message}
      </div>
    </>
  );
};

export default RegisterBok;
