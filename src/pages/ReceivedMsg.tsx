import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Message from '../components/Message';
import BokClick from '../atoms/BokClick';

const ReceivedMsg = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Header rightChild={<BokClick />} />
      <Message nickName={location.state.nickname} children={location.state.message} isReadOnly={true} onClick={() => { }} />
    </div>
  )
}

export default ReceivedMsg