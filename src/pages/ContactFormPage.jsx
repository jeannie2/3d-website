import React from "react" // useMemo
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from "../components/ContactForm"

const ContactFormPage = () => {
  return (
    <>
    <Container id="shop-container" className='h-75'>
    {/* p-6  */}

      <Row className="h-75">
        <Col className="col-md-8 m-auto align-items-center ml-auto mr-auto">
          <ContactForm/>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default ContactFormPage
