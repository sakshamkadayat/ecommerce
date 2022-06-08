import "./footer.css";
import {Navbar,Container} from 'react-bootstrap';
import saksham from "../pictures/logo.png";
export function Footer() {
  return (
    <>
   
  <div className="footer_sak">
  <Navbar fixed="bottom" >
  <Navbar bg="dark" className="footer_a">
  <Container>
    <div className="image">
    <Navbar.Brand href="#home" >
      <img
        src={saksham}
        width="80"
        height="80"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> 
    </Navbar.Brand>
    
    </div>
  </Container>
  <Navbar.Brand to="/home"> © copyright saksham </Navbar.Brand>

  </Navbar>
  </Navbar>
  </div>
    </>
  );
}
