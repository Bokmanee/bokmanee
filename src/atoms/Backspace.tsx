import React from "react";
import { useNavigate } from "react-router-dom";

const Backspace = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      aria-label="뒤로가기버튼"
    >
      <img
        src={process.env.PUBLIC_URL + "assets/images/icon-back.svg"}
        alt="뒤로가기이미지"
      />
    </button>
  );
};

export default Backspace;
