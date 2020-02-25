import "./Profile.style.css";

import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  CardSubtitle,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import profile from "../../../assets/images/tempProfile.jpg";

const Profile = _ => {
  const urls={
    email: {
      icon: faEnvelope,
      url: "workingnewjeong@gmail.com"
    },
    github: {
      icon: faGithub,
      url: "https://github.com/yujeongJeon"
    },
    blog: {
      icon: faBlog,
      url: "http://coffeeandcakeandnewjeong.tistory.com/"
    },
    twitter: {
      icon: faTwitter,
      url: "https://twitter.com/LifeEnzoey"
    }
  }

  const titles = Object.keys(urls);

  const onClick = url => {
    window.open(url);
  };

  return (
    <Row noGutters className="profile">
      <Col sm="12" className="d-flex-center">
        <Card className="profile-card">
          <CardBody>
            <CardTitle className="font-xl mb-0">Profile</CardTitle>
            <hr className="line"/>
            <CardImg width="138px" src={profile} alt="Card image cap" />
            <CardSubtitle className="my-3">Yujeong, Jeon</CardSubtitle>
            <CardText>
              <Row>
                <Col sm="12" className="mb-2">1994.09.02.</Col>
              </Row>
            </CardText>
            <CardText>
              <Row>
                {
                  titles.map((title, idx) => {
                    const { icon, url } = urls[title];

                    return (
                      <Col key={idx} sm="12" className="d-flex-center mb-1">
                        <FontAwesomeIcon icon={icon} className="mr-1 font-lg" />
                        <Button color="link" className="profile-btn" onClick={_ => onClick(url)}>
                          { url }
                        </Button>
                      </Col>
                    )
                  })
                }
              </Row>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
