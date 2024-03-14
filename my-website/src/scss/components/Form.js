import { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import "./_Form.scss";

function FormContact(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const formRef = useRef(null);

  function submitHandler() {
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const inputData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    props.onAddData(inputData);

    formRef.current.reset();
  }

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Please enter your name";
    } else if (!/^[a-zA-Z\s]*$/.test(values.name)) {
      errors.name = "Please enter only letters";
    }

    if (!values.email) {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!values.message) {
      errors.message = "Please enter a message";
    }
    return errors;
  };

  return (
    <Container>
      <div className="form-component">
        <div className="form-text-box">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validate={validate}
            onSubmit={submitHandler}
          >
            {({ getFieldProps }) => (
              <Form
                className="cta-form"
                method="post"
                name="sign-up"
                netlify=""
                id="form"
                ref={formRef}
              >
                <div className="form-item">
                  <label htmlFor="fullName">
                    <FontAwesomeIcon icon={faUser} className="icon" /> Full Name
                    *
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="John Dale"
                    innerRef={nameInputRef}
                    {...getFieldProps("name")}
                  />
                  <ErrorMessage className="error" name="name" component="div" />
                </div>
                <div className="form-item">
                  <label htmlFor="email">
                    {" "}
                    <FontAwesomeIcon icon={faEnvelope} className="icon" /> Email
                    Address *
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="me@exemple.com"
                    innerRef={emailInputRef}
                    {...getFieldProps("email")}
                  />
                  <ErrorMessage
                    className="error"
                    name="email"
                    component="div"
                  />
                </div>

                <div className="form-item">
                  <label htmlFor="textarea">
                    {" "}
                    <FontAwesomeIcon icon={faMessage} className="icon" /> Your
                    Message *
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Write your message here."
                    innerRef={messageInputRef}
                    {...getFieldProps("message")}
                  />
                  <ErrorMessage
                    className="error"
                    name="message"
                    component="div"
                  />
                </div>

                <button type="submit" className="btn" id="circle-bar">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
}

export default FormContact;
