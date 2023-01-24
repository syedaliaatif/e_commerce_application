import { useState } from "react";
import { Col, Container, Row, Form, Button,InputGroup, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPage=()=>{

    const onChange=()=>{
        
        const password = document.querySelector("input[name=password]"); 
        const repeat = document.querySelector("input[name=passwordRepeat"); 
        if(repeat.value==password.value)
        {
            repeat.setCustomValidity(""); 
        }
        else {
            repeat.setCustomValidity("Passwords do not match"); 
        }
    }
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container>
            <Row className="mt-5 justify-content-md-center"> 
                <Col md={6} >
                    <h1>Register</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                                name ="name"
                            />
                            <Form.Control.Feedback type="invalid">Please Enter Your Name</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your last name"
                                name="lastName"
                                
                            />
                            <Form.Control.Feedback type="invalid">Please Enter Your Last Name</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid e-mail address</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                minLength={8}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
                            <Form.Text className="text-muted">Password should have atleast 8 characters.</Form.Text>
                            
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Repeat your password"
                                name="passwordRepeat"
                                onChange={onChange}
                                minLength={8}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
                            </Form.Group>
                            <Row className="pb-2">
                                <Col>
                                    Do you have an account already? 
                                
                                    <Link to="/login" className="mx-2">
                                        Login 
                                    </Link>
                                </Col>
                            </Row>

                            
                        <Button type="submit">
                        <span className="mx-2">Submit</span>
                        <Spinner 
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        
                        </Button>
                        <Alert show={true} variant="danger" className="my-2">
                            User with that email already exists!
                        </Alert>
                        <Alert show={true} variant="info" className="my-2">
                            User created!
                        </Alert>
                    </Form>

                
                </Col>
            </Row>
        </Container>
    )
}
export default RegisterPage; 