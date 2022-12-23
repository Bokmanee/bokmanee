import React from "react";
import { Button, GitHubButton, KakaoButton } from "../atoms/Button";

const Login = () => {
  return (
    <div>
      <Button>버튼</Button>
      <KakaoButton>카카오</KakaoButton>
      <GitHubButton>깃허브</GitHubButton>
    </div>
  );
};

export default Login;
