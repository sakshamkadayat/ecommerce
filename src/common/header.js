import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../common/header.css";
import image from "../pictures/pofile.png"
import"../pages/logincss/form.css";
import saksham from "../pictures/logo.png";

export function Header() {
  return (
    <>
   
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="Nav">
        <div className="image">
    <Navbar.Brand href="#home" >
      <img
        src={saksham}
        width="60"
        height="60"
     />   
    </Navbar.Brand>
    </div>
          <Navbar.Brand to="/home">Ecommerce_web</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavLink className="nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
                <NavLink className="nav-link" to="/contact-us">contact-us</NavLink>
                </Nav>
            <Nav>
                <div class="profile">
                <img src={image} alt="Avatar" class="avatar"/>
                </div>
                <NavLink className="nav-link" to="/login">Sign In </NavLink>
                <NavLink className="nav-link" to="/register">Register </NavLink>
                
             </Nav>
            
             
             
         
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </>
  );
}
