import React from "react";

export interface BtnProps {
  type?: "submit" | "button";
  onClick?: () => void;
  children?: React.ReactNode;
}

const WhButton = ({ type, onClick, children }: BtnProps) => {
  return (
    <button className="btn-wh" type={type ?? type} onClick={onClick ?? onClick}>
      {children}
    </button>
  );
};

const SkyButton = ({ type, onClick, children }: BtnProps) => {
  return (
    <button
      className="btn-sky"
      type={type ?? type}
      onClick={onClick ?? onClick}
    >
      {children}
    </button>
  );
};

const KakaoButton = ({ onClick, children }: BtnProps) => {
  return (
    <button className="btn-kakao" type="button" onClick={onClick ?? onClick}>
      {children}
    </button>
  );
};

const GitHubButton = ({ onClick, children }: BtnProps) => {
  return (
    <button className="btn-github" type="button" onClick={onClick ?? onClick}>
      {children}
    </button>
  );
};

export { WhButton, SkyButton, KakaoButton, GitHubButton };
