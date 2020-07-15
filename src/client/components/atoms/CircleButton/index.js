import './CircleButton.style.css';

import React from "react";

const CircleButton = ({className}) => {
  return (
    <svg height="30" width="30" className={className}>
      <circle cx="15" cy="15" r="10" fill="white" stroke="#dbdbdb" className="circle" />
      svg를 지원하지 않는 브라우저입니다.
    </svg>
  );
};

export default CircleButton;
