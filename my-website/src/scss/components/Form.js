import { useRef } from "react";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import "./_Form.scss";

function Form(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const inputData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    props.onAddData(inputData);
  }

  return (
    <Container>
      <div className="form-component">
        <div className="form-text-box">
          <form
            className="cta-form"
            method="post"
            name="sign-up"
            netlify=""
            id="form"
          >
            <div className="form-item">
              <label htmlFor="fullName">
                <FontAwesomeIcon icon={faUser} className="icon" /> Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="John Dale"
                name="fullName"
                required=""
                ref={nameInputRef}
              />
            </div>
            <div className="form-item">
              <label htmlFor="email">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} className="icon" /> Email
                Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="me@exemple.com"
                name="email"
                required=""
                ref={emailInputRef}
              />
            </div>

            <div className="form-item">
              <label htmlFor="textarea">
                {" "}
                <FontAwesomeIcon icon={faMessage} className="icon" /> Your
                Message *
              </label>
              <textarea
                id="textarea"
                name="Review"
                cols="30"
                rows="10"
                required=""
                placeholder="Write your message here."
                ref={messageInputRef}
              ></textarea>
            </div>

            <input
              type="submit"
              value="Submit"
              className="btn"
              id="circle-bar"
              onClick={submitHandler}
            />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Form;
