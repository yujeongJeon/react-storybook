import "./Header.style.css";

import React from "react";
import logo from "../../../assets/logo.png";
import { NavGroup } from "../../molecules";

const Header = _ => {
  const items = [
    {
      href: "#",
      title: "챗봇 만들기"
    },
    {
      href: "#",
      title: "공지사항"
    },
    {
      href: "#",
      title: "FAQ"
    },
    {
      href: "#",
      title: "로그인"
    }
  ]
  return (
    <NavGroup
    logo={ logo }
    logoHeight="75"
    className="header"
    brandClassName="logo"
    items={ items }
    right />
    // <div className="header">
    //   <img src={logo} height="75" className="logo" />
    //   <ul className="nav">
    //     <li className="nav-item">
    //       <a className="nav-link" href="#">
    //         챗봇 만들기
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link" href="#">
    //         공지사항
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link" href="#">
    //         FAQ
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link" href="#">
    //         로그인
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Header;
