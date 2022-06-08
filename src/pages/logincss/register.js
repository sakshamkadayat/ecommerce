import { Form,Col,Row,Button, Container } from "react-bootstrap";
import "../logincss/form.css"



export function Register() {
  return (
    <>
    <Container>  
       
    <br></br>
    
  
    <div className="Text">

        <h3>User Registration </h3>
    </div>
               
          <hr></hr>   
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
                Email
            </Form.Label>
            <Col sm={10}>
                <Form.Control type="email" placeholder="Enter your email" />
            </Col>

            </Form.Group>
        
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
                Password
            </Form.Label>
            <Col sm={10}>
                <Form.Control type="password" placeholder="Enter your Password" />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
                Confirm-Password
            </Form.Label>
            <Col sm={10}>
                <Form.Control type="password" placeholder="Confirm your Password" />
            </Col>
            </Form.Group>
            
           
        
            <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign up</Button>
            </Col>
            </Form.Group>
        </Form>
      
   
</Container>

    </>
  );
}
