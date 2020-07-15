import "./TabGroup.style.css";

import React, {useState} from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from "reactstrap";
import classnames from 'classnames';

const TabGroup = ({
  vertical,
  items,
  title
}) => {
  const [activeTab, setActiveTab] = useState(items[0].tab);

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const showNavs = _ => {
    return (
      items.map((item, idx) => (
        <NavItem key={`n_${idx}`}>
          <NavLink
          className={classnames({ active: activeTab === item.tab })}
          onClick={ _ => toggle(item.tab)}>
          {item.name}
          </NavLink>
        </NavItem>
      ))
    )
  }

  const showContent = _ => {
    return (
      items.map(({component, tab, ...rest}, idx) => (
        <TabPane key={`t_${idx}`} tabId={tab} active className="animated fadeIn">
          {
            component
          }
        </TabPane>
      ))
    )
  }


  return (
    <Row noGutters className="tab-group">
      {
        title &&
        <Col sm="12" className="col-title">
        { title }
        </Col>
      }
      <Col sm="4">
        <Nav tabs vertical={vertical} className="nav-vertical-half border-0">
        {
          showNavs()
        }
        </Nav>
      </Col>
      <Col sm="8">
        <TabContent activeTab={activeTab} className="tab-content-half">
          {
            showContent()
          }
        </TabContent>
      </Col>
    </Row>
  )
}

TabGroup.defaultProps = {
  vertical: false,
  title: void 0
}

export default TabGroup;