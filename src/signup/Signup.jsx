import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navgite = useNavigate();

  const [firstname, setfirstname] = useState("");
  const [textfirstname, settextfirstname] = useState("");
  const [colortextfirstname, setcolortextfirstname] = useState("");

  const [lastname, setlastname] = useState("");
  const [textlastname, settextlastname] = useState("");
  const [colortextlastname, setcolortextlastname] = useState("");

  const [username, setusername] = useState("");
  const [textusername, settextusername] = useState("");
  const [colortextusername, setcolortextusername] = useState("");

  const [email, setemail] = useState("");
  const [textemail, settextemail] = useState("");
  const [colortextemail, setcolortextemail] = useState("");

  const [password, setpassword] = useState("");
  const [textpassword, settextpassword] = useState("");
  const [colortextpassword, setcolortextpassword] = useState("");

  const [image, setimage] = useState(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fru%2Ffree-png-zrgjx&psig=AOvVaw0aGlcLSgnP60jS71tqsHff&ust=1684505062752000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiCsNWE__4CFQAAAAAdAAAAABAJ"
  );
  const [textimage, settextimage] = useState("");
  const [colortextimage, setcolortextimage] = useState("");

  const [city, setcity] = useState("");
  const [textcity, settextcity] = useState("");
  const [colortextcity, setcolortextcity] = useState("");

  const [phonenumber, setphonenumber] = useState("");
  const [textphonenumber, settextphonenumber] = useState("");
  const [colortextphonenumber, setcolortextphonenumber] = useState("");

  const [gender, setgender] = useState("");
  const [textgender, settextgender] = useState("");
  const [colortextgender, setcolortextgender] = useState("");

  const hendelform = (e) => {
    e.preventDefault();
    if (firstname === "") {
      settextfirstname("invailed first name");
      setcolortextfirstname("text-danger");
    } else if (lastname === "") {
      settextlastname("invailed last name");
      setcolortextlastname("text-danger");
      settextfirstname("");
    } else if (username === "") {
      settextusername("invailed user name");
      setcolortextusername("text-danger");
      settextlastname("");
      settextfirstname("");
    } else if (email === "") {
      settextemail("invailed email");
      setcolortextemail("text-danger");
      settextusername("");
      settextlastname("");
      settextfirstname("");
    } else if (password === "") {
      settextpassword("invailed password");
      setcolortextpassword("text-danger");
      settextemail("");
      settextlastname("");
      settextfirstname("");
      settextusername("");
    } else if (image === "") {
      settextimage("invailed image");
      setcolortextimage("text-danger");
      settextpassword("");
      settextlastname("");
      settextfirstname("");
      settextusername("");
      settextemail("");
    } else if (city === "") {
      settextcity("invailed city");
      setcolortextcity("text-danger");
      settextimage("");
      settextlastname("");
      settextfirstname("");
      settextusername("");
      settextemail("");
      settextpassword("");
    } else if (phonenumber === "") {
      settextphonenumber("invailed phonenumber");
      setcolortextphonenumber("text-danger");
      settextcity("");
      settextlastname("");
      settextfirstname("");
      settextusername("");
      settextemail("");
      settextpassword("");
      settextimage("");
    } else if (gender === "") {
      settextgender("you must chooes");
      setcolortextgender("text-danger");
      settextphonenumber("");
      settextlastname("");
      settextfirstname("");
      settextusername("");
      settextemail("");
      settextpassword("");
      settextimage("");
      settextcity("");
    } else {
      const data = {
        firstname,
        lastname,
        username,
        email,
        password,
        image,
        city,
        phonenumber,
        gender,
      };
      localStorage.users = JSON.stringify(data);
      navgite("/login");
    }
  };
  return (
    <div className="d-flex justify-content-center w-100 bg-secondary bg-opacity-50">
      <Form className="w-50 mt-5 mb-5 pt-3" onSubmit={hendelform}>
        <Form.Group className="d-sm-flex justify-content-sm-center d-lg-flex justify-content-lg-between mb-3 ">
          <Form.Group className="mb-3">
            <Form.Label className="fw-bolder">First Name</Form.Label>
            <Form.Control
              placeholder="First name"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            <Form.Text className={colortextfirstname}>
              {textfirstname}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bolder">Last Name</Form.Label>
            <Form.Control
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
            <Form.Text className={colortextlastname}>{textlastname}</Form.Text>
          </Form.Group>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bolder">User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter user name"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <Form.Text className={colortextusername}>{textusername}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bolder">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <Form.Text className={colortextemail}>{textemail}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bolder">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <Form.Text className={colortextpassword}>{textpassword}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bolder">Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="image"
            value={image}
            onChange={(e) => setimage(e.target.value)}
          />
          <Form.Text className={colortextimage}>{textimage}</Form.Text>
        </Form.Group>
        <Form.Group className="d-sm-flex justify-content-sm-center d-lg-flex justify-content-lg-between mb-3">
          <Form.Group className="mb-3 me-lg-2">
            <Form.Label className="fw-bolder">City</Form.Label>
            <Form.Control
              placeholder="enter city"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
            <Form.Text className={colortextcity}>{textcity}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 me-lg-2 me-sm-0">
            <Form.Label className="fw-bolder">Phone Number</Form.Label>
            <Form.Control
              placeholder=""
              type="number"
              value={phonenumber}
              onChange={(e) => setphonenumber(e.target.value)}
            />
            <Form.Text className={colortextphonenumber}>
              {textphonenumber}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bolder">Gender</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            >
              <option></option>
              <option>male</option>
              <option>female</option>
            </Form.Select>
            <Form.Text className={colortextgender}>{textgender}</Form.Text>
          </Form.Group>
        </Form.Group>
        <Form.Group className="mb-3 text-primary">
          <Form.Check
            type="checkbox"
            className="fw-bolder"
            label="Apply Rules and Conditions"
          />
        </Form.Group>
        <Form.Group className="w-100 d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Signup;
