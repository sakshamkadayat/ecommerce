import image from "../pictures/user.gif"
import "../pages/logincss/form.css";
import { Form,Col,Row,Button, Container } from "react-bootstrap";
export function Login(){

 return(
    <>
<div className="Big_div">
<Container>
        <div className="main-container">    
            <div className="imgcontainer">
            <img src={image} alt="Avatar" class="avatar"/>
            </div>
      
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                    </Form.Group>
                
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                    </Form.Group>
                
                    <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                    </Form.Group>
                </Form>
               </div>
             </Container>
             </div>        
</>
 );
    
    }