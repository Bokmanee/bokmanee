import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { appAuth, appFireStore } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './Login';
// import UserBoardPage from './UserBoardPage';

const LoginCheck = ({ userInfo }: any) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [init, setInit] = useState<boolean>(false);

  const userToken = localStorage.getItem('token')
  console.log(userToken);

  useEffect(() => {
    appAuth.onAuthStateChanged((user: any) => {
      console.log(user);
      if (user) {
        setIsLogin(!isLogin)
        navigate(`/${userInfo.email.split('@')[0]}/message_board`, {
          state: userInfo,
        })
      } else {
        setIsLogin(isLogin)
        navigate(`/login`, {
          state: userInfo,
        })
      }
      setInit(true);
    })
  }, [])

  // console.log(isLogin);
  // console.log(userInfo);

  return (
    <div>
      {
        // isLogin === true ?
        //   <>
        //     {/* {navigate(`/${userInfo.email.split('@')[0]}/message_board`)} */}
        //     <UserBoardPage isLogin={isLogin} userInfo={userInfo} />
        //   </> :
        //   <>
        //     <Login isLogin={isLogin} userInfo={userInfo} />
        //   </>
      }
    </div>
  )
}

export default LoginCheck