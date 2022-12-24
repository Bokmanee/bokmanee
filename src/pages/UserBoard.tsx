import React from 'react'
import { useNavigate } from 'react-router-dom';
import Board from '../atoms/Board';
import { WhButton, SkyButton } from '../atoms/Button';
import "../sass/pages/_userBoard.scss";

const UserBoard = () => {
  const navigate = useNavigate();
  const linkToChooseBokPouch = () => {
    navigate('/chooseBokPouch')
  }
  const linkToHome = () => {
    navigate('/login')
  }
  return (
    <>
      <Board
        username='웨빈'
        message1='님에게'
        message2='새해 응원 메시지를 남겨보세요 !'
      />
      <img className='userboard-img' src="assets/images/background-rabbit.svg" alt="복토끼 사진" />
      <div className='userboard-btn-wrap'>
        <SkyButton type='button' children='복주머니 만들기' onClick={linkToChooseBokPouch} />
        <WhButton type='button' children='홈으로 이동' onClick={linkToHome} />
      </div>
    </>
  )
}

export default UserBoard
