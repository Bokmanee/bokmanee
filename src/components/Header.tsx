import React from "react";

export interface HeaderProps {
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
}

const Header = ({ leftChild, rightChild }: HeaderProps) => {
  return (
    <div className="wrap-header">
      <div>{leftChild}</div>
      <div>{rightChild}</div>
    </div>
  );
};

export default Header;
