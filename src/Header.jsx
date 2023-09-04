import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "./images/hero/logo.png";
import { AiOutlineShopping } from "react-icons/ai";
import Badge from "react-bootstrap/Badge";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { Button } from "react-bootstrap";
const Header = ({ productsShoping }) => {
  const navgite = useNavigate();

  const hendellogout = () => {
    localStorage.clear();
    navgite("/login");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-lg-flex flex-lg-row justify-content-lg-center w-75">
              <Nav.Link className="underline" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="underline" as={Link} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link className="underline" href="#link">
                About Us
              </Nav.Link>
            </Nav>
            <Button
              as={Link}
              to="/shopping"
              className="position-relative me-3 bg-transparent text-black border-0 mt-2"
            >
              <AiOutlineShopping className="fs-2 text" />
              <Badge
                bg={productsShoping.length > 0 ? "success" : "danger"}
                className="position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle"
              >
                {productsShoping.length}
              </Badge>
            </Button>
            {localStorage.Login ? (
              <Nav.Link onClick={hendellogout}>
                <BiLogOut className="fs-2 text  text-primary" />
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                <FiLogIn className="fs-2 text  text-primary" />
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
