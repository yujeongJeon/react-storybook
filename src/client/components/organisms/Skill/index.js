import "./Skill.style.css";

import React from "react";
import { TabGroup } from "../../molecules";
import { Row, Col } from "reactstrap";

const Skill = _ => {
  return (
    <Row className="skill" noGutters>
      <Col sm="12">
        <TabGroup
        vertical
        title={<div className="title">
          <p>보유 기술<span className="en">Technical skills</span></p>
          <hr className="line"/>
          </div>}
        items={
          [
            {
              tab: "languages",
              name: "Languages",
              component: <>언어</>
            },
            {
              tab: "frameworks",
              name: "Frameworks",
              component: <>프레임워크</>
            },
            {
              tab: "databases",
              name: "Databases",
              component: <>데이터베이스</>
            }
          ]
        } />
      </Col>
    </Row>
  )
}

export default Skill;