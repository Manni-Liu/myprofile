import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/manni-liu-66b911304/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/Manni-Liu"><img src={navIcon2} alt="" /></a>
              <a href="https://medium.com/@manniliu08"><img src={navIcon3} alt="" /></a>
            </div>
            <p>© 2025 Manni Liu. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}