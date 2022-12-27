import React from "react";
import { SkyButton } from "../atoms/Button";

interface MessageProps {
  isReadOnly: boolean;
  nickName?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const Message = ({ isReadOnly, nickName, children, onClick }: MessageProps) => {
  return isReadOnly ? (
    <article className="message-readOnly ">
      <div className="message-line scroll-custom">
        <p className="contents">{children}</p>
      </div>
      <span className="nickName">From. {nickName}</span>
      <button onClick={onClick} className="btn-close">
        <span className="ir">메세지 닫기</span>
      </button>
    </article>
  ) : (
    <form className="message-write">
      <textarea className="scroll-custom" placeholder="메세지를 적어주세요." />
      <SkyButton onClick={onClick} type="button">
        저장하기
      </SkyButton>
    </form>
  );
};

export default Message;
