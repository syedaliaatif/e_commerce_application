import { useState } from "react";
import { Col, Container, Row, Form, Button,InputGroup, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserProfilePage=()=>{

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
                                
                                name ="name"
                                defaultValue={"Aatif"}
                            />
                            <Form.Control.Feedback type="invalid">Please Enter Your Name</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue={"Syed Ali"}
                                name="lastName"
                                
                            />
                            <Form.Control.Feedback type="invalid">Please Enter Your Last Name</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                disabled
                                type="email"
                                defaultValue={"aatifABC@gmail.com"}
                                name="email"
                                
                            />
                            <Form.Text className="text-muted"> If you want to change your email account you first have to delete this account and create a new account with different email.
                          </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                name ="phoneNumber"
                                defaultValue={""}
                            />
                            <Form.Control.Feedback type="invalid">Please Enter a valid phone number</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name ="address"
                                defaultValue={""}
                            />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name ="city"
                                defaultValue={""}
                            />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                name ="state"
                                defaultValue={""}
                            />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                name ="country"
                                defaultValue={""}
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

                            
                        <Button type="submit">
                        <span className="mx-2">Submit</span>
                        
                        </Button>
                        <Alert variant="danger" className="mt-3">
                            Credentials do not match.
                        </Alert>
                        <Alert variant="info" className="mt-3">
                            User updated!
                        </Alert>
                        
                    </Form>

                
                </Col>
            </Row>
        </Container>
    )
}
export default UserProfilePage; 