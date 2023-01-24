import React from "react";
import { Alert, Button, Col, Container, Form, Image, ListGroup, ListGroupItem, Row, Stack } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CartPage =()=> {
    return(
        <Container>
            <h1>Shopping Cart</h1>
        <Row className="mt-5">
            
            <Col md={8}>

            <ListGroup variant="flush">

                {
                    Array.from({length:4}).map((_,idx)=>(
                        <ListGroup.Item key={idx}>
                            <Stack direction="horizontal" gap={5}>
                                <Image width={100} height={100} fluid src="images/games-category.png"></Image>
                                <span>Product {idx+1}</span>
                                <span className="fw-bold">{`${idx+1}00`} $</span>
                                
                                <Form.Select size="sm" style={{width:"70px",cursor:"pointer"}} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Form.Select>

                                
                                <Button variant="light" style={{background:"transparent" ,border:"none", outline:"none"}}>
                                <i class="bi bi-trash3"></i>
                                </Button>
                            </Stack>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
            <Alert variant="info">Your Cart is Empty.</Alert>
               
            </Col>
            <Col md={4} >
                <ListGroup>
                    <ListGroup.Item>
                        <h3>Subtotal (2 Products) </h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price : <span className="fw-bold">300$</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <LinkContainer to="/user/cart-details">
                        <Button variant="primary" type="button">Checkout</Button>
                    </LinkContainer>
                    </ListGroup.Item>
                </ListGroup>
            </Col>

        </Row>
        </Container>
    )
};
export default CartPage; 