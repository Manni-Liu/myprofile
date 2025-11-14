import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import Image from "../assets/img/Image.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Spline from "@splinetool/react-spline";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "FullStack Developer",
    "Software Developer",
    "Mobile Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">.</span>
                  <h1 className="mb-3">{`Hi! I'm Manni`}</h1>
                  <h1>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Software Developer", "Mobile Developer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Full Stack Software Developer with 4+ years of experience in
                    website and mobile app development.{" "}
                  </p>
                  <p>
                    Experience in using C#, ASP.NET Core, Python, React,
                    TypeScript, React Native, AWS, GitHub Actions and Docker
                  </p>
                  <p>
                    Collaborative, Communicative, Reliable, Detail-oriented,
                    Self-motivated
                  </p>
                  <a
                    href={`${process.env.PUBLIC_URL}/CV-Manni-Full Stack Developer.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>
                      Resume <FaArrowAltCircleRight size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={Image} alt="Image" />
                  {/* <Spline scene="https://prod.spline.design/GfrCw9bBdbbvKW8Y/scene.splinecode" /> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
