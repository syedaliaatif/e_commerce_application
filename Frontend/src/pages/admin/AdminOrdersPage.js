import React from "react"
import { Container, Table, Row, Col, Stack } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const AdminOrdersPage = () => {
    return (
        <Container>
            <Row>
                <Col md={2}>
                    <AdminLinksComponent />
                </Col>
                <Col md={10}>
                    <div className="h1 mt-5 mb-3">My-Orders</div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Delivered</th>
                                <th>Payment Method</th>
                                <th>Order Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.from({ length: 8 }).map((_, idx) => (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>user1234</td>
                                        <td>15-12-2022</td>
                                        <td>{`${idx + 1}00`}</td>
                                        <td><i className="bi bi-x-lg" style={{ color: "red", fontWeight: "bold" }}></i><i className="bi bi-check-lg" style={{ color: "green", fontWeight: "bold" }}></i></td>
                                        <td>PayPal</td>
                                        <td><Link to="/product-details">Details</Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>

        </Container>
    );

}

export default AdminOrdersPage; 