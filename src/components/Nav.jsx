import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";


const styles = {
  name: {
    fontSize: 50,
    color: 'white',
  },
 
}

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand style={styles.name} >Lee Norrell</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <div style={styles.linkborder}>
            <Link 
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
              >
              About me
            </Link>
            </div>
            <div>
            <Link
              to="/contact"
              className={
                currentPage === "/contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
            </div>
            <div>
            <Link 
              to="/portfolio"
              className={
                currentPage === "/portfolio" ? "nav-link active" : "nav-link"
                }
                >
              Portfolio
            </Link>
            </div>
            <div>
            <Link 
              to="/resume"
              className={
                currentPage === "/resume" ? "nav-link active" : "nav-link"
                }
                >
              Resume
            </Link>
              </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
