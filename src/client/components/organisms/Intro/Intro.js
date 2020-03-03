import './Intro.style.css';
import React, { useRef, memo } from 'react';
import { Row, Col } from 'reactstrap';

import intro from '../../../assets/images/intro.png';

import * as uuidv4 from "uuid/v4";
import useAnimation from '../../../helpers/useAnimation';

const ChatFrame = memo(user => {
  return (
    <iframe className="chat-iframe" width="360" height="100%" src={ `https://leaflo.ldcc.co.kr:4001/?apiKey=b91baa8b-6522-41d7-98bc-92c8a1a70ee1&userId=${user}&accessKey=ac7c44e1-0202-4e51-8f7f-c71161a8236a&accessSecret=0f5126cb-d7fc-46ef-ad06-687349fce522` } />
  )
})

let count = 0;

const Intro = props => {
  const randomUser = uuidv4();
  const imgRef = useRef();

  const animationFunc = yPos => {
    let style = imgRef.current.style;

    style.transform = `translateY(${yPos}px)`;
    return --yPos; 
  }

  const stopFunc = yPos => {
    if (yPos === 0) {
      return true;
    }
    return false;
  }

  const opacityFunc = opacity => {
    let style = imgRef.current.style;

    style.opacity = opacity;
    return opacity+0.1
  }

  const stopOpacityFunc = opacity => {
    if (opacity >= 1) {
      return true;
    }
    return false;
  }

  // const { done: doneTransform } = useAnimation(animationFunc, stopFunc, 35);
  // const { done: doneOpacity } = useAnimation(opacityFunc, stopOpacityFunc, 0);
  console.log("render ", count);
  count++;
  // animated fadeUp
  return (
    <Row className="py-3 row-filled intro" noGutters>
      <Col sm="6" className="title">
        <img src={intro} className="img-intro-title animated fadeUp" ref={ imgRef } />
      </Col>
      <Col sm="6" className="d-flex-center chatbot">
        <ChatFrame user={ randomUser } />
      </Col>
    </Row>
  )
}

export default Intro;