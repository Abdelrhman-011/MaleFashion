import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [textemail, settextemail] = useState(
    "We'll never share your email with anyone else."
  );
  const [colortextemail, setcolortextemail] = useState("");
  const [textpassword, settextpassword] = useState("");
  const [colortextpassword, setcolortextpassword] = useState("");
  const [textwroning, settextwroning] = useState("");
  const [colortextwroning, setcolortextwroning] = useState("");

  const navigate = useNavigate();

  const hendelform = (e) => {
    e.preventDefault();
    if (email === "") {
      settextemail("Invaide Your Email !");
      setcolortextemail("text-danger");
    } else if (password === "") {
      settextpassword("Invaide Your Password !");
      setcolortextpassword("text-danger");
      settextemail("We'll never share your email with anyone else.");
      setcolortextemail("text-secondary");
    } else {
      const data = { email, password };
      if (localStorage.users) {
        if (
          data.email === JSON.parse(localStorage.users).email &&
          data.password === JSON.parse(localStorage.users).password
        ) {
          navigate("/");
          localStorage.Login = true;
        } else {
          settextwroning("You must Create Account");
          setcolortextwroning("text-danger");
          setcolortextemail("text-secondary");
          setcolortextpassword("text-secondary");
        }
      } else {
        settextwroning("You must Create Account");
        setcolortextwroning("text-danger");
        setcolortextemail("text-secondary");
        setcolortextpassword("text-secondary");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center w-100 bg-secondary bg-opacity-50">
      <Form className="w-50 mt-5 mb-5 pt-3" onSubmit={hendelform}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bolder">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <Form.Text className={colortextemail}>{textemail}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bolder">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <Form.Text className={colortextpassword}>{textpassword}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            className="fw-bolder"
            label="Remember Me"
          />
          <Form.Text className={colortextwroning}>{textwroning}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="me-2 mb-3">
          Login
        </Button>
        <Button variant="primary" as={Link} to="/signup" className="mb-3">
          Create New Account
        </Button>
      </Form>
    </div>
  );
};

export default Login;
