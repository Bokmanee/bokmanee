import React from "react";
import { useNavigate } from "react-router-dom";

const BokClick = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/tutorial");
      }}
      aria-label="튜토리얼 버튼"
    >
      <img
        src={process.env.PUBLIC_URL + "assets/images/icon-rabbit-click.svg"}
        alt="토끼이미지"
      />
    </button>
  );
};

export default BokClick;
