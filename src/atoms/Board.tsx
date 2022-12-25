import React from "react";
import "../sass/atoms/_board.scss";

interface BoardProps {
  username?: string;
  message1?: string;
  message2?: string;
  children?: React.ReactNode;
}

const Board = ({ username, message1, message2, children }: BoardProps) => {
  return (
    <>
      <div className="board-wrapper">
        <h1 className="board-title">
          <span className="username">{username}</span>
          {message1}
          <br />
          {message2}
        </h1>
        <p className='board-text'>{children}</p>
      </div>
    </>
  );
};

export default Board;
