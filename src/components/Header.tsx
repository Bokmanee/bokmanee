import React from "react";
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
}

const Header = ({ leftChild, rightChild }: HeaderProps) => {
  const navigate = useNavigate();

  const moveToTutorial = () => {
    navigate("/tutorial");
  };
  return (
    <div className="wrap-header">
      <div>{leftChild}</div>
      <div onClick={moveToTutorial}>{rightChild}</div>
    </div>
  );
};

export default Header;
