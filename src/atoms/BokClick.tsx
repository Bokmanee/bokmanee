import React from "react";

const BokClick = () => {
  return (
    <button
      onClick={() => {
        // 튜토리얼 모달창 띄우기
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
