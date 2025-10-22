import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const AboutSection = () => {
  return (
    <section className="about" id="about">
      <style>{`
        .custom-tabs .nav-link {
          background: none !important;
          border: none !important;
          color: #aaa !important;
          font-size: 2rem;
          font-weight: 500;
          position: relative;
          padding: 8px 16px;
          transition: all 0.3s ease;
        }

        .custom-tabs .nav-link:hover {
          color: #fff !important;
        }

        .custom-tabs .nav-link.active {
          color: #fff !important;
        }

        .custom-tabs .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #fff;
          transition: width 0.3s ease;
        }
      `}</style>

      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About Me</h2>
                  <p>
                    I am a passionate software developer with experience in
                    building web and mobile applications. I enjoy creating
                    user-friendly interfaces and solving complex problems
                    through code. In my free time, I like to explore new
                    technologies and improve my skills.
                  </p>
                  <p>
                    Feel free to reach out to me for any collaboration or
                    project opportunities. I am always open to new challenges
                    and learning experiences.
                  </p>
                  <p>Thank you for visiting my portfolio!</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* ✅ 使用自定义的下划线Tab样式 */}
                    <Nav
                      variant="pills"
                      className="custom-tabs mb-5 justify-content-left align-items-left"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certifications</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {/* -------- Education -------- */}
                      <Tab.Pane eventKey="first">
                        <div className="text-left md:text-left space-y-3">
                          <h4 className="text-2xl font-semibold text-white">
                            Master of Applied Computing | GPA:8.6/9
                          </h4>
                          <h5 className="text-gray-300 text-sm md:text-base">
                            Lincoln University | 11/2023 - 05/2025
                          </h5>
                          <p className="text-gray-300 text-sm md:text-base">
                            <span className="font-medium text-white">
                              Major:
                            </span>{" "}
                            Software Development, Database Management, Business
                            Analysis, Machine Learning, Neural Network
                          </p>
                        </div>
                      </Tab.Pane>

                      {/* -------- Certifications -------- */}
                      <Tab.Pane eventKey="second">
                        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
                          <li>
                            Oracle MySQL 8.0 Database Developer – Oracle
                            Certified Professional
                          </li>
                          <li>
                            Oracle Cloud Infrastructure 2025 Certified
                            Foundations Associate
                          </li>
                          <li>
                            Oracle AI Vector Search Certified Professional
                          </li>
                          <li>Microsoft AI Skills 4 Women</li>
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
