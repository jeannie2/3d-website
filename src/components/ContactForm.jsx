import React, { useRef, useState} from "react"
import { Alert, Button, Form} from "react-bootstrap"
import { useNavigate  } from "react-router-dom"
import { supabaseClient } from '../../supabaseClient.js'

const ContactForm = () => {
  const navigate = useNavigate()

  // useState for all below like fcc example instead?
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const [errorMsg, setErrorMsg] = useState("")
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(false)

    // const register = (email, password) =>
    // supabase.auth.signUp({ email, password });

const handleSubmit = async (e) => {
  e.preventDefault()
  if(
    !firstNameRef.current?.value ||
    !lastNameRef.current?.value ||
    !emailRef.current?.value ||
    !phoneRef.current?.value
  ) {
    setErrorMsg("Please fill all the fields")
      return
    }
  try {
      setErrorMsg("")
      setLoading(true)
      const { data, error } = await supabaseClient
        .from('contacts')
        .insert([
          { // set as array?
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            email:  emailRef.current.value,
            phone: phoneRef.current.value
          }
        ]

        )
      if (!error && data) {
        setMsg(
          "Contact added successfully"
        );
        console.log(msg)
        // res.send("contact added successfully")
        // closeHandler();
      }
    } catch (error) {
      setErrorMsg("Error in adding contact details")
    }
    setLoading(false)
    resetForm()
    navigate('/bookmarked')
  }

  const resetForm = () => {
    firstNameRef.current.value = ""
    lastNameRef.current.value = ""
    emailRef.current.value = ""
    phoneRef.current.value = ""
  };

  //  const closeHandler = () => {
  //   setFirstName("");
  //   setLastName("");
  //   setEmail(false);
  //   setPhone();
  // };

return (
  <>
    <Form onSubmit={handleSubmit}>
      <Form.Group id="first-name">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" ref={firstNameRef} required />
      </Form.Group>

      <Form.Group id="last-name">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" ref={lastNameRef} required />
      </Form.Group>

      <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} required />
      </Form.Group>

      <Form.Group id="phone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" ref={phoneRef} placeholder="NXX-XXX-XXXX" required />
      </Form.Group>

      {errorMsg && (
        <Alert
          variant="danger"
          onClose={() => setErrorMsg("")}
          dismissible>
          {errorMsg}
        </Alert>
      )}
       {/* need ?  */}
      {msg && (
        <Alert variant="success" onClose={() => setMsg("")} dismissible>
          {msg}
        </Alert>
      )}
      <div className="text-center mt-2">
        <Button disabled={loading} type="submit" className="btn">
          Submit
        </Button>
      </div>
    </Form>
  </>
  )
}

export default ContactForm

// for textual form controls—like inputs and textareas—use the FormControl component.

// const { data, error } = await register (
//   firstNameRef.current.value,
//   lastNameRef.current.value,
//   emailRef.current.value,
//   phoneRef.current.value
// );
