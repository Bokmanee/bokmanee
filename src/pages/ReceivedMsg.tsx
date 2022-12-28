import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Message from "../components/Message";
import BokClick from "../atoms/BokClick";

const ReceivedMsg = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <Header rightChild={<BokClick />} />
      <Message
        nickName={location.state.nickname}
        children={location.state.message}
        isReadOnly={true}
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};

export default ReceivedMsg;
