import React from "react";
import { GitHubButton, KakaoButton } from "../atoms/Button";

const Login = () => {
  return (
    <div>
      <KakaoButton>카카오</KakaoButton>
      <GitHubButton>깃허브</GitHubButton>
    </div>
  );
};

export default Login;
