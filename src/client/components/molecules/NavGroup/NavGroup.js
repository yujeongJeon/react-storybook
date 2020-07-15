import "./NavGroup.style.css";

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

const NavGroup = ({
  logo,
  logoWidth,
  logoHeight,
  className,
  brandClassName,
  color,
  expand,
  right,
  items,
  side
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = _ => setIsOpen(!isOpen);

  return (
    <Navbar color={ color } light expand={ expand } className={className}>
      <NavbarBrand href="/">
        <img src={ logo } width={ logoWidth } height={ logoHeight } className={brandClassName} />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className={ right ? "navbar-collapse-right" : "" }>
        <Nav className={ right ? "mr-0" : "mr-auto" } navbar>
          { 
            items.map(({ href, title }, idx) => (
              <NavItem key={ idx }>
                <NavLink href={ href }>{ title }</NavLink>
              </NavItem>
            ))
          }
        </Nav>
        { side && <NavbarText>{ side }</NavbarText> }
      </Collapse>
    </Navbar>
  );
};

NavGroup.defaultProps = {
  logoWidth: "",
  logoHeight: "",
  color: "faded",
  expand: "md",
  side: void 0,
  right: false
}

export default NavGroup;