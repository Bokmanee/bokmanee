import React, { useEffect } from "react";
import { useNavigate } from 'react-router';
import '../sass/pages/_splash.scss';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login')
    }, 1500)
  }, [])

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
