import React from "react"
import { Container, Table, Row, Col, Stack, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const AdminProductsPage = () => {

    const deleteHandler = () => {
        if (window.confirm("Are you sure?")) alert("Product Deleted")
    }
    return (
        <Container>
            <Row>
                <Col md={2}>
                    <AdminLinksComponent />
                </Col>
                <Col md={10}>
                    <div className="h1 mt-5 mb-3">Product List
                        <LinkContainer to="/admin/create-new-product">
                            <Button size="lg" variant="primary" className="mx-3">
                                Create new
                            </Button>
                        </LinkContainer>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Edit/Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.from({ length: 8 }).map((_, idx) => (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>Watch Rolex TD-123</td>
                                        <td>{`${idx}000$`}</td>
                                        <td>Electronics/Gadgets</td>
                                        <td>
                                            <LinkContainer to="/admin/edit-product">
                                                <Button variant="primary" className="btn-sm">
                                                    <i className="bi bi-pencil-square"></i>
                                                </Button>
                                            </LinkContainer>
                                            <span className="h2">{" "}/{" "}</span>
                                            <Button variant="danger" className="btn-sm" onClick={deleteHandler}>
                                                <i className="bi bi-x-circle"></i>
                                            </Button>

                                        </td>
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

export default AdminProductsPage; 