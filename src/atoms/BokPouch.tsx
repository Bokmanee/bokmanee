import React from "react";

interface BokPouchProps {
  color: string;
  angle?: string;
  nickname: string | any;
  onClick?: () => void;
}

const BokPouch = ({ color, angle, nickname, onClick }: BokPouchProps) => {
  return (
    <button className="bokPouch flex-align" onClick={onClick}>
      <span className="ir">메세지 확인하기</span>
      <div className={`pouch-${color} pouch-${angle ?? angle}`} />
      <label>{nickname}</label>
    </button>
  );
};

export default BokPouch;
