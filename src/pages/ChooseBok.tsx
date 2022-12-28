import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Backspace from '../atoms/Backspace';
import BokClick from '../atoms/BokClick';
import Board from '../atoms/Board';
import Header from '../components/Header';
import { WhButton } from '../atoms/Button';
import Input from '../atoms/Input';
import "../sass/pages/_chooseBok.scss";

const ChooseBok = ({ userInfo }: any) => {
  const [nickname, setNickname] = useState("");

  const onChange = (event: any) => {
    setNickname(event.target.value);
    console.log(event.target.value);
  }

  const navigate = useNavigate();
  const linkToRegisterMessage = () => {
    navigate('/registerMessage', {
      state: nickname,
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
      <div className='pouch-allwrap'>
        <Input
          id='nickname-input'
          label='닉네임'
          type='text'
          placeholder='닉네임'
          value={nickname}
          onChange={onChange}
          required={true} />
        <div className='pouch-wrap'>
          <div>
            <input id='pouch-red' type="radio" name='pouch' />
            <label htmlFor="pouch-red">
              <img src="assets/images/icon-pouch-red.svg" alt="복주머니" />
            </label>
          </div>
          <div>
            <input id='pouch-yellow' type="radio" name='pouch' />
            <label htmlFor="pouch-yellow">
              <img src="assets/images/icon-pouch-yellow.svg" alt="복주머니" />
            </label>
          </div>
          <div>
            <input id='pouch-green' type="radio" name='pouch' />
            <label htmlFor="pouch-green">
              <img src="assets/images/icon-pouch-green.svg" alt="복주머니" />
            </label>
          </div>
          <div>
            <input id='pouch-blue' type="radio" name='pouch' />
            <label htmlFor="pouch-blue">
              <img src="assets/images/icon-pouch-blue.svg" alt="복주머니" />
            </label>
          </div>
          <div>
            <input id='pouch-purple' type="radio" name='pouch' />
            <label htmlFor="pouch-purple">
              <img src="assets/images/icon-pouch-purple.svg" alt="복주머니" />
            </label>
          </div>
        </div>
        <WhButton type='button' children='편지 쓰기' onClick={linkToRegisterMessage} />
      </div>
    </>
  )
}

export default ChooseBok