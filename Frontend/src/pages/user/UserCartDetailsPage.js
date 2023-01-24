import React from "react";
import { Row,Col, Container, Alert,Form, Stack, Image, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCartDetailsPage=()=>
{
    return (
        <>
        <Container fluid>
            <Row className="mt-3">
                <Col>
                    <h1>Cart Details</h1>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={8} >
                    <Row>
                        <Col md={6}>
                    
                            
                            <Row>
                                <Col><h3>Shipping</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span className="fw-bold">Name: </span>
                                    Syed Ali Aatif 
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span className="fw-bold">Address: </span>
                                    823, Raddison Street, New Delhi - 110024 
                                </Col>
                            </Row><Row>
                                <Col>
                                    <span className="fw-bold">Phone: </span>
                                    8765927398
                                </Col>
                            </Row>
                            
                            
                        </Col>
                        <Col md={6}>
                            <Row> 
                                <Col>
                                    <h3>Payment Method</h3>
                                    <Form>
                                        <Form.Select >
                                            <option>Select payment method</option>
                                        </Form.Select>
                                    </Form>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            3<Alert variant="danger" className="mt-3">Not delivered</Alert>
                        </Col>
                        <Col md={6}>
                            <Alert variant="danger" className="mt-3">Not paid yet.</Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="mb-3"> Order items</h3>
                            {
                            Array.from({length:3}).map((_,idx)=>(
                                <div key={idx}>
                                <Stack direction="horizontal" gap={3}>
                                <div className="bg-light stack-img"><Image fluid width={100} height={100} src="/images/games-category.png"></Image></div>
                                <div className="bg-light stack-desc" style={{maxWidth:"600px"}}>Lorem Ipsum Descriptiong of the product this product is bla bla aljg ajblgld dlkajbg dalal albgalbg</div>
                                <div className="bg-light fw-bold stack-price">300$</div>
                                <div className="bg-light stack-select">
                                <Form.Select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Form.Select></div>
                                <div className="stack-delete-img">
                                <Button style={{cursor:"pointer", backgroundColor:"grey", border:"none",outline:"none"}}><i className="bi bi-trash3-fill"></i></Button></div>
                                </Stack>
                            <hr/></div>
                            ))}
                        </Col>
                    </Row>
                    
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>
                                Order Summary
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Items price (after tax): <span className="fw-bold">$809.99</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Shipping : <span className="fw-bold">included</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Tax : <span className="fw-bold">included</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="text-danger">
                            Total Price: <span className="fw-bold">$904</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button size="lg" variant="danger" type="button">
                                 Pay for your order        
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default UserCartDetailsPage; 