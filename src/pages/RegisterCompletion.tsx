import React from 'react'
import { useNavigate } from 'react-router-dom'
import Board from '../atoms/Board'
import BokClick from '../atoms/BokClick'
import Header from '../components/Header'
import { SkyButton } from '../atoms/Button'

const RegisterCompletion = () => {
  const navigate = useNavigate();
  const linkToHome = () => {
    navigate('/login')
  }
  return (
    <>
      <Header rightChild={<BokClick />} />
      <div className='register-complete-wrap'>
        <img src="assets/images/icon-pouch-red.svg" alt="복주머니" />
        <Board
          username='웨빈'
          message1='님에게'
          message2='복주머니가 전달되었습니다 !'
        />
        <SkyButton
          children='내 복주머니 저장소 만들기'
          onClick={linkToHome} />
      </div>
    </>
  )
}

export default RegisterCompletion