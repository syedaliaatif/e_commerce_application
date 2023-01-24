import { Row, Col, Button, Container, Form, CloseButton, Table, Alert, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";



const AdminEditProductPage = () => {
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
                    <Link to="/admin/products" className="btn btn-info">Go Back</Link>
                </Col>
                <Col md={6}>
                    <h2>Create a new product</h2>

                    <Form className="mt-3" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" required name="productName" defaultValue={"Laptop"} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} style={{ resize: "none" }} required name="description" defaultValue={"This is a laptop"} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicStockCount">
                            <Form.Label>Count in stock</Form.Label>
                            <Form.Control type="number" required name="stockCount" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" required name="price" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCategory">
                            <Form.Label> Category </Form.Label>
                            <Form.Select required="category" name="category">
                                <option>Select Category</option>
                                <option value="1">Laptop</option>
                                <option value="2">Games</option>
                                <option value="3">Music</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNewCategory">
                            <Form.Label>Or create a new category</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formBasicNewAttribute">
                                <Form.Label>Select attribute and set value</Form.Label>
                                <Form.Select name="attributeKey" >
                                    <option>Select attribute</option>
                                    <option value="RAM">RAM</option>
                                    <option value="Battery">Battery</option>
                                    <option value="Price">Price</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicNewAttributeValue">
                                <Form.Label>Attribute value</Form.Label>
                                <Form.Select name="attributeValue">
                                    <option>Select attribute value</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>Value</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Attr key
                                        </td>
                                        <td>
                                            Attr Value
                                        </td>
                                        <td> <CloseButton /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formBasicNewAttribute">
                                <Form.Label>New attribute</Form.Label>
                                <Form.Control type="text" required disabled={false} placeholder="First choose or create a new category" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicNewAttributeValue">
                                <Form.Label>Attribute value</Form.Label>
                                <Form.Control type="text" required disabled={false} placeholder="First choose or create a new category" />
                            </Form.Group>
                        </Row>
                        <Alert variant="primary">
                            After entering attribute key and value, press enter on one of the fields.
                        </Alert>

                        <Row>
                            <Col xs={3} style={{ position: "relative" }}>
                                <Image fluid src="/images/monitors-category.png" ></Image>
                                <i className="bi bi-x text-danger" style={onHover}></i>
                            </Col>
                        </Row>
                        <Form.Group controlId="formBasicImages" className="mb-3">
                            <Form.Label>Images</Form.Label>
                            <Form.Control type="file" multiple required name="images" />
                        </Form.Group>

                        <Button variant="primary" type="submit">Update</Button>





                    </Form>
                </Col>
            </Row>
        </Container>
    )
};
export default AdminEditProductPage; 