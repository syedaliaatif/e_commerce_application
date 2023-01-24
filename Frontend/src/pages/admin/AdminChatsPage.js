import { Container, Row, Col } from "react-bootstrap";
import AdminChatRoomComponent from "../../components/admin/AdminChatRoomComponent";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const AdminChatsPage = () => {
    return (
        <Container>
            <Row className="mt-5 justify-content-center">
                <Col md={2}>
                    <AdminLinksComponent />
                </Col>
                <Col md={10}>
                    <AdminChatRoomComponent />
                </Col>
            </Row>
        </Container>
    )
};
export default AdminChatsPage; 