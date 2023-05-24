
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutPage = () => {
  return (
    <>
    <Container id="about-container" className="h-100">
    <Row className="h-100">
    <Col>
    <h1>Jeannie Nam </h1>
      <div className="animate__animated animate__fadeIn animate__delay-1s">
      <h2>Education:</h2>New York University (2015)
      <h2 className="pt-3">Work Experience:</h2>
      <ul>
        <li>Senior Digital Marketing Executive, HKTDC</li>
        <li>Editorial Staff, Taylor & Francis Group</li>
        <li>Web Intern, Time Out Hong Kong </li>
      </ul>
      </div>

      <div className="animate__animated animate__fadeIn animate__delay-2s pt-2">
      <h2>Certifications: </h2>
      <ul>
        <li>Full Stack Web Development Immersive bootcamp (H Academy)</li>
        <li>Responsive Web Design certification (freeCodeCamp)</li>
      </ul>
      </div>

      <div className="animate__animated animate__fadeIn animate__delay-4s pt-2">
      <h2>Technical skills</h2>
      <p>HTML5, CSS3, JavaScript, React, Bootstrap, GIT, RESTful API, Node.js, Express, Tailwind CSS, Next.js, jQuery, SASS, SCSS, Firebase, AWS S3, Prisma ORM, PostgreSQL, Formik, Yup, nodemailer</p>
    </div>
      </Col>
      </Row>
  </Container>
    </>
  )
}

export default AboutPage
