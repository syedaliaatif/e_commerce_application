import React from "react"
import { Container, Table, Row, Col, Stack } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const deleteHandler = () => {
    if (window.confirm("Are you sure?")) alert("User is deleted")
}
const AdminUsersPage = () => {
    return (
        <Container>
            <Row>
                <Col md={2}>
                    <AdminLinksComponent />
                </Col>
                <Col md={10}>
                    <div className="h1 mt-5 mb-3">User List</div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Is admin</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.from({ length: 8 }).map((_, idx) => (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{`user${idx + 1}${idx + 2}${idx + 3}`}</td>
                                        <td>last name</td>
                                        <td>{`user${idx + 1}${idx + 2}${idx + 3}@gmail.com`}</td>
                                        <td><i className="bi bi-x-lg" style={{ color: "red", fontWeight: "bold" }}></i><i className="bi bi-check-lg" style={{ color: "green", fontWeight: "bold" }}></i></td>
                                        <td>
                                            <LinkContainer to="/admin/order-details">
                                                <i className="bi bi-pencil-square btn btn-primary btn-sm"></i>
                                            </LinkContainer>
                                            {" / "}

                                            <i className="bi bi-x-circle btn btn-danger btn-sm" onClick={deleteHandler}></i>



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

export default AdminUsersPage; 