import React, { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { appAuth, appFireStore } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { UserInterface } from './Join';

const Splash = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInterface | any>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(appAuth, async (user) => {
      if (user) {
        const q = query(
          collection(appFireStore, 'users'),
          where('uid', '==', user.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setUserInfo({
            uid: data.uid,
            email: data.email,
            displayName: data.displayName,
          })
        })
        setIsLogin(true);
        if (isLogin === true) {
          setTimeout(() => {
            navigate(`/${userInfo.email.split('@')[0]}/message_board`, {
              state: isLogin
            })
          }, 1500)
        }
      } else {
        setIsLogin(false)
        setTimeout(() => {
          navigate('/login', {
            state: isLogin
          })
        }, 1500)
      }
    })
  }, [isLogin])

  return (
    <div className='splash-wrapper'>
      <h1 className='title'>2023</h1>
      <div className='loading'>
        <div className='loading-bar'></div>
      </div>
      <p className='loadingMsg'>LOADING . . .</p>
    </div>
  );
};

export default Splash;
