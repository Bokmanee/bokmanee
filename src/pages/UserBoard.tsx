import React from 'react'
import "../sass/pages/_userBoard.scss";
import Board from '../atoms/Board';

const UserBoard = () => {
  return (
    <>
      <Board
        username='웨빈'
        message1='님에게'
        message2='새해 응원 메시지를 남겨보세요 !'
      />
      <img className='userboard-img' src="assets/images/background-rabbit.svg" alt="" />
      <div className='userboard-btn-wrap'>
        <button className='bokpouch-btn' type='button'>복주머니 만들기</button>
        <button className='home-btn' type='button'>홈으로 이동</button>
      </div>
    </>
  )
}

export default UserBoard
