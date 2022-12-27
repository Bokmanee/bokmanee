import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function KaKaoLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  const REST_API_KEY = "78b882d931f2a2e937f9edd73d866867";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";

  const userNickName = localStorage.getItem("nickName");
  console.log(userNickName);

  const getKakaoToken = async () => {
    const url = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`;

    axios
      .post(url, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((data) => {
        console.log(data);
        if (data.data.access_token) {
          localStorage.setItem("token", data.data.access_token);
          if (userNickName) {
            navigate("/myboard");
          } else {
            navigate("/nicknamesetting");
          }
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return <div>KaKaoLogin</div>;
}

export default KaKaoLogin;
