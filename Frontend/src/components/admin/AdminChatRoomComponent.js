import { Button, Toast, Form } from "react-bootstrap";
import { Textarea } from "react-bootstrap-icons";
import "../../chats.css"

const handleSubmit = (event) => {

    const form = event.targetArea;
    if (form.checkValidation() === false) {
        event.preventDefault();
        event.stopPropagation();

    }

}
const AdminChatRoomComponent = () => {

    return <>
        <Toast className="ms-4 mb-5">
            <Toast.Header>
                <strong className="me-auto"> Chat with John Doe </strong>
            </Toast.Header>
            <Toast.Body style={{ maxHeight: "300px", overflow: "auto" }}>

                {Array.from({ length: 30 }).map((_, idx) => (
                    <div key={idx}>
                        <p className="bg-primary ms-4 p-3 text-light rounded-pill">
                            <b>User Wrote: </b>
                            Hello world ! This is a chat message.
                        </p>
                        <p>
                            <b>Admin Wrote: </b>
                            Hello world ! This is a chat message.
                        </p>
                    </div>
                ))}

                <div className="chat-form">
                    <textarea id="clientChatMsg" className="form-control" placeholder="Your Text Message"></textarea>
                    <button className="btn btn-success btn-block">Submit</button>
                </div>

            </Toast.Body>
        </Toast>
    </>

}
export default AdminChatRoomComponent; 