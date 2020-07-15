import "./Header.style.css";

import React from "react";
import logo from "../../../assets/juj_logo.png";
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
    logoWidth="256"
    className="header"
    brandClassName="logo"
    items={ items }
    right />
  );
};

export default Header;
