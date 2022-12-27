import React from "react";
import { SkyButton } from "../atoms/Button";

interface MessageProps {
  isReadOnly: boolean;
  nickName?: string;
  children?: React.ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
  onClick: () => void;
}

const Message = ({ isReadOnly, nickName, children, value, onChange, onClick }: MessageProps) => {
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
      <textarea onChange={onChange} value={value} className="scroll-custom" placeholder="메세지를 적어주세요." />
      <SkyButton onClick={onClick} type="button">
        저장하기
      </SkyButton>
    </form>
  );
};

export default Message;
