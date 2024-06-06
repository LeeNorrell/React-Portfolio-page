import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  const currentPage = useLocation().pathname;

  console.log(currentPage);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >Lee Norrell</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              About me
            </Link>
            <Link
              to="/contact"
              className={
                currentPage === "/contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
            <Link
              to="/portfolio"
              className={
                currentPage === "/portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
            <Link
              to="/resume"
              className={
                currentPage === "/resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
