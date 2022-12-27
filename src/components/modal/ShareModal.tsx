import React from "react";
import { KakaoButton, WhButton } from "../../atoms/Button";

const ShareModal = () => {
  return (
    <>
      <h1 className="ir">공유하기</h1>
      <div className="share-button-area">
        <WhButton>링크 복사하기</WhButton>
        <KakaoButton>카카오톡 공유하기</KakaoButton>
      </div>
    </>
  );
};

export default ShareModal;
