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
  nav: {
    fontSize: '30px',
    marginLeft: '8vw',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: 'white',
   marginLeft: '60px',
   border: '2px black'
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
          <Nav className="me-auto" style={styles.nav}>
            <div style={styles.linkborder}>
            <Link style={styles.link}
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
              >
              About me
            </Link>
            </div>
            <div>
            <Link style={styles.link}
              to="/contact"
              className={
                currentPage === "/contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
            </div>
            <div>
            <Link style={styles.link}
              to="/portfolio"
              className={
                currentPage === "/portfolio" ? "nav-link active" : "nav-link"
                }
                >
              Portfolio
            </Link>
            </div>
            <div>
            <Link style={styles.link}
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
