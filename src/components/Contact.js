import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';


export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message } = formDetails;
    if (!firstName || !lastName || !email || !phone || !message) {
      setStatus({ success: false, message: "Please fill in all fields." });
      return;
    }
    setButtonText("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/myzlepjw", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formDetails)
      });

      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (response.ok) {
    setStatus({ success: true, message: "Message sent successfully!" });
    setTimeout(() => {
      setStatus({ success: null, message: "" });
    }, 2000);
} else {
    setStatus({ success: false, message: "Something went wrong. Try again later." });
    setTimeout(() => {
      setStatus({ success: null, message: "" });
    }, 3000);
}
    } catch (error) {
      setStatus({
        success: false,
        message: "Network error. Please try again later."
      });
      setTimeout(() => {
        setStatus({ success: null, message: "" });
      }, 3000);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="justify-content-center">
          <Col size={12} md={8}>
            <div>
              <h2>Contact Me</h2>
              <p>
                Feel free to reach out if you have a project in mind, want to
                collaborate, or simply want to say hello. I'm always open to
                discussing new opportunities in web development and software
                engineering.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) =>
                      onFormUpdate("firstName", e.target.value)
                    }
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                <Col className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                   <div className="submit-row">
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>

                    {status.message && (
                      <p className={status.success ? "success msg" : "danger msg"}>
                        {status.message}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
