import React from "react";
import "../sass/pages/_myBoard.scss";
import Header from "../components/Header";
import BokClick from "../atoms/BokClick";
import Board from "../atoms/Board";
import BokPouch from "../atoms/BokPouch";
import { WhButton } from "../atoms/Button";

const MyBoard = () => {
  return (
    <>
      <Header rightChild={<BokClick />} />
      <div className="wrap-myboard">
        <Board
          username="옌니"
          message1="님이 받은"
          message2="새해 응원 메시지를 확인해보세요  !"
        />
        <div className="grid-bok scroll-custom">
          <BokPouch color="red" nickname="전갈진" />
          <BokPouch color="purple" nickname="전갈진" />
          <BokPouch color="red" nickname="전갈진" />
          <BokPouch color="red" nickname="전갈진" />
          <BokPouch color="blue" nickname="전갈진" />
          <BokPouch color="red" nickname="전갈진" />
          <BokPouch color="yellow" nickname="전갈진" />
          <BokPouch color="yellow" nickname="전갈진" />
          <BokPouch color="yellow" nickname="전갈진" />
          <BokPouch color="yellow" nickname="전갈진" />
          <BokPouch color="yellow" nickname="전갈진" />
        </div>
        <WhButton>링크공유하기</WhButton>
      </div>
    </>
  );
};

export default MyBoard;
