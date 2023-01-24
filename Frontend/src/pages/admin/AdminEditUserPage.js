import { Row, Col, Button, Container, Form, CloseButton, Table, Alert, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";



const AdminEditUserPage = () => {
    const onHover = {
        position: "absolute",
        left: "4px",
        top: "-10px",
        transform: "scale(2.7)"
    };
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }
    return (
        <Container>
            <Row className="mt-5 justify-content-center">
                <Col md={1}>
                    <Link to="/admin/users" className="btn btn-info">Go Back</Link>
                </Col>
                <Col md={6}>
                    <h2>User Details</h2>

                    <Form className="mt-3" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" required name="firstName" defaultValue={"Syed Ali"} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" required name="lastName" defaultValue={"Aatif"} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required name="email" defaultValue={"aatifblabla@hotmail.com"} />
                        </Form.Group>

                        <Form.Check type="checkbox" name="isAdmin" label="Is Admin" defaultChecked className="mb-3" />






                        <Button variant="primary" type="submit">Update</Button>





                    </Form>
                </Col>
            </Row>
        </Container>
    )
};
export default AdminEditUserPage; 