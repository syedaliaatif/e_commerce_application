import { Button, Card, Col, Row } from "react-bootstrap";
import {Rating} from "react-simple-star-rating"

const ProductForListComponent=()=>{

    return (
        <Card style={{marginTop:"50px", marginBottom:"50px"}} className="m-5">
            <Row>
                <Col lg={5}>
                    <Card.Img variant="top" src="images/tablets-category.png" />
                </Col>
                <Col lg={7}>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Text>
                        <Rating readonly initialValue={5} size={"20px"}/><span style={{fontSize:"10px"}}>(5)</span>
                    </Card.Text>
                    <Card.Text className="h4">
                    124${" "}
                    <Button variant="danger">See Product</Button>
                    </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            
            
        </Card>

    )
}
export default ProductForListComponent; 