import React from "react";
import "../../sass/components/_joinModal.scss";
// import "../sass/component/_joinModal.scss";
function JoinModal() {
  return (
    <div className="join-modal-area">
      <div className="join-modal-wrap">
        <img
          className="join-pouch-image"
          src="../../assets/images/icon-pouch-red.svg"
          alt="복주머니"
        ></img>
        <p className="join-celeb">복만이 가입이 완료되었습니다.</p>
        <p className="join-share">친구들에게 링크를 공유해보세요 !</p>
      </div>
    </div>
  );
}

export default JoinModal;
