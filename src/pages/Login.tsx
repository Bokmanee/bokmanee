import React from "react";
import { WhButton, GitHubButton, KakaoButton } from "../atoms/Button";

const Login = () => {
  return (
    <div>
      <WhButton>버튼</WhButton>
      <KakaoButton>카카오</KakaoButton>
      <GitHubButton>깃허브</GitHubButton>
    </div>
  );
};

export default Login;
