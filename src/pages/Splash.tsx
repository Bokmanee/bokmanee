import React, { useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
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
    <div className='wrapper'>
      <div>
        <h1 className='title'>2023</h1>
        <BarLoader
          width={200}
          height={14}
          color={'#ffffff'}
          speedMultiplier={0.6}
        />
        <p className='loadingMsg'>LOADING . . .</p>
      </div>
    </div>
  );
};

export default Splash;
