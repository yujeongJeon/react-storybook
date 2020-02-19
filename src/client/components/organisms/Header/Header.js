import './Header.style.css';

import React from 'react';
import logo from '../../../assets/logo.png';

const Header = _ => {
  return (
    <div className="header">
      <img src={ logo } width="258" />
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="#">가이드</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">공지사항</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">FAQ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">로그인</a>
        </li>
      </ul>
  </div>
  )
}

export default Header;