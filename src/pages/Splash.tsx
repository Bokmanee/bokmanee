// import React, { useEffect } from "react";
// import { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { appAuth, appFireStore } from '../firebase/config';
// import { onAuthStateChanged } from 'firebase/auth';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { UserInterface } from './Join';

// const Splash = ({ userInfo }: any) => {
//   const navigate = useNavigate();

//   // const [userInfo, setUserInfo] = useState<UserInterface | any>("");
//   const [isLogin, setIsLogin] = useState<boolean>(false);

//   useEffect(() => {
//     onAuthStateChanged(appAuth, async (user) => {
//       if (user && userInfo !== undefined) {
//         setIsLogin(true);
//         userInfo.email !== undefined &&
//           setTimeout(() => {
//             navigate(`/${userInfo.email.split('@')[0]}/message_board`, {
//               state: isLogin
//             })
//           }, 1500)
//       } else {
//         setIsLogin(false)
//         setTimeout(() => {
//           navigate('/login', {
//             state: isLogin
//           })
//         }, 1500)
//       }
//     })
//   }, [])
//   console.log(isLogin);
//   console.log(userInfo.email !== undefined ? userInfo.email.split('@')[0] : '');

//   return (
//     <div className='splash-wrapper'>
//       <h1 className='title'>2023</h1>
//       <div className='loading'>
//         <div className='loading-bar'></div>
//       </div>
//       <p className='loadingMsg'>LOADING . . .</p>
//     </div>
//   );
// };

// export default Splash;

import React, { useEffect } from "react";
import { useNavigate } from 'react-router';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/main`)
    }, 1500)
  }, [])

  return (
    <div className='splash-wrapper'>
      <h1 className='title'>2023</h1>
      <div className='loading'>
        <div className='loading-bar'></div>
      </div>
      <p className='loadingMsg'>LOADING . . .</p>
    </div>)
}

export default Splash