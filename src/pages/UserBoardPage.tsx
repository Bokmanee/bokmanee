import React from 'react'
import { useLocation } from 'react-router-dom';
import MyBoard from './MyBoard'
import UserBoard from './UserBoard'
import Login from './Login';

const UserBoardPage = ({ userInfo }: any) => {
  const location = useLocation();
  const loginStatus = location.state;
  console.log(loginStatus);

  return (
    <>
      {
        // 로그인일때 해당 유저 보드로 , 로그아웃이면 로그인페이지로 가는건가??
        loginStatus === true ? <MyBoard userInfo={userInfo} /> : <Login userInfo={userInfo} />
      }
    </>
  )
}

export default UserBoardPage