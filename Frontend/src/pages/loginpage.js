import { useState } from "react";
import { Col, Container, Row, Form, Button,InputGroup, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage=()=>{

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
                    <h1>Login</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                
                            />
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
                            
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check 
                                        name="doNotLogOut"
                                        type={"checkbox"}
                                        id={"keepLoggedIn"}
                                        label={"Keep me logged in"}
                                />
                            </Form.Group>
                            
                            <Row className="pb-2">
                                <Col>
                                    For first time users.  
                                
                                    <Link to="/register" className="mx-2">
                                        Register 
                                    </Link>
                                </Col>
                            </Row>
                            
                                    
                                

                            
                        <Button type="submit">
                        <span className="mx-2">Login</span>
                        <Spinner 
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        
                        </Button>
                        <Alert show={true} variant="danger" className="my-2">
                            Wrong email or password. 
                        </Alert>
    
                    </Form>

                
                </Col>
            </Row>
        </Container>
    )
}
export default LoginPage; 