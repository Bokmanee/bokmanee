import React from "react";

interface BokPouchProps {
  color: string;
  angle?: string;
  nickname: string;
}

const BokPouch = ({ color, angle, nickname }: BokPouchProps) => {
  return (
    <button className="bokPouch flex-align">
      <span className="ir">메세지 확인하기</span>
      <div className={`pouch-${color} pouch-${angle ?? angle}`} />
      <label>{nickname}</label>
    </button>
  );
};

export default BokPouch;
