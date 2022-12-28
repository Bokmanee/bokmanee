import React from "react";
import { useNavigate } from "react-router-dom";
import Backspace from "../atoms/Backspace";
import BokClick from "../atoms/BokClick";
import { WhButton } from "../atoms/Button";
import Header from "../components/Header";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header leftChild={<Backspace />} rightChild={<BokClick />} />
      <main className="flex-align main-404">
        <img src="assets/images/background-sad-rabbit.svg" alt="" />
        <p className="page-notFound">페이지를 찾지 못했습니다.</p>
        <WhButton
          onClick={() => {
            navigate(-1);
          }}
        >
          이전 페이지로 이동
        </WhButton>
      </main>
    </>
  );
};

export default Error404;
