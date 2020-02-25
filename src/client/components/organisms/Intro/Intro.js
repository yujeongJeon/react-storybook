import './Intro.style.css';
import React from 'react';
import { Row, Col } from 'reactstrap';

import intro from '../../../assets/images/intro.png';

import * as uuidv4 from "uuid/v4";

const Intro = props => {
  const randomUser = uuidv4();

  return (
    <Row className="py-3 row-filled intro" noGutters>
      <Col sm="6" className="title">
        <img src={intro} width="380" />
      </Col>
      <Col sm="6" className="d-flex-center chatbot">
        <iframe className="chat-iframe" width="360" height="100%" src={ `https://leaflo.ldcc.co.kr:4001/?apiKey=b91baa8b-6522-41d7-98bc-92c8a1a70ee1&userId=${randomUser}&accessKey=ac7c44e1-0202-4e51-8f7f-c71161a8236a&accessSecret=0f5126cb-d7fc-46ef-ad06-687349fce522` } />
      </Col>
    </Row>
  )
}

export default Intro;