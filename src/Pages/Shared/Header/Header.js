import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-2">
            Furn's Warehouse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-0 mx-auto ">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

              
                {user ? (
                  <Nav.Link as={Link} to="/manage-inventory">Manage inventory</Nav.Link>
                ) : (
                  <Nav.Link></Nav.Link>
                )}

                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="btn btn-outline-warning"
                  >
                    Sign out
                  </button>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
