import "./Skill.style.css";

import React from "react";
import { TabGroup } from "../../molecules";
import { Row, Col,  } from "reactstrap";
import { ListGroup } from "../../molecules";

const Skill = _ => {
  const frameworks = [
    {
      title: 'React',
      description: '2018.10. ~ 2020.07.'
    },
    {
      title: 'Angular',
      description: '2020.05. ~ 2020.07.'
    }
  ];

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
              component: <ListGroup contents={frameworks} />
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