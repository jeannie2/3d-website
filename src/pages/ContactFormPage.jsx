import React from "react"; // useMemo
import { Container } from 'react-bootstrap'
import ContactForm from "../components/ContactForm"

const ContactFormPage = () => {
  return (
    <>
    <Container id="shop-container" className='p-6'>
        {/* <Row> */}
      <ContactForm/>
        {/* </Row> */}
    </Container>
  </>
  )
}

export default ContactFormPage
