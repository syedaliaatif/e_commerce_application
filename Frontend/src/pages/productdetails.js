import { Row,Col, Image, Container, ListGroup, Form, Button, Alert } from "react-bootstrap";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import {Rating} from "react-simple-star-rating";
import ImageZoom from "js-image-zoom";
import { useEffect } from "react";
const ProductDetailsPage=()=>{
    var imageLoc=["images/games-category.png", "images/monitors-category.png", "images/tablets-category.png"]; 
    const options={
        scale:2,
        offset:{vertical:0, horizontal:20}
    }
    useEffect(()=>{
        for(let i=1;i<=3;i++)
        {
            new ImageZoom(document.getElementById(`image_${i}`),options); 
        }
         
    })
    return (
        <Container>
        <AddedToCartMessageComponent/>
       <Row>
       <Col md={4} style={{zIndex:1}}>
       
        {
            imageLoc.map((item,idx)=>(
                    <div key={item} id={`image_${idx+1}`} className={"my-3"}>
                        <Image crossOrigin="anonymous" src={item} fluid/>
                    </div>
                
            ))
        }
       </Col> 
       <Col md={8}>
        <Row >
            <Col md={4}>
            <ListGroup variant="flush">
                <ListGroup.Item className="h1">Product Name</ListGroup.Item>
                
                <ListGroup.Item><Rating readonly size={20} initialValue={5}/><span style={{fontSize:"10px"}}>(1)</span></ListGroup.Item>
                <ListGroup.Item >Price: <span className="fw-bold">500$</span></ListGroup.Item>
                <ListGroup.Item>Product Description: Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Praesent malesuada tortor sed gravida accumsan. 
                Nam imperdiet mi magna, vitae mattis magna iaculis vitae. Ut ac neque nisl. 
                </ListGroup.Item>
                
            </ListGroup> 
            </Col>
            <Col md={4}>
                <ListGroup >
                    <ListGroup.Item >Status: In Stock</ListGroup.Item>
                    <ListGroup.Item > Price: <span className="fw-bold">500$</span></ListGroup.Item>
                    <ListGroup.Item>
                        <span className="fw-bold">Quantity:</span>
                        <Form.Select size="lg">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                    </ListGroup.Item>
                    <ListGroup.Item><Button variant="danger">Add To Cart</Button></ListGroup.Item>
                    
                </ListGroup>
                
                
            </Col>
        </Row>
        <Row>
            
            <Col className="mt-5" >
            <p className="h4">Reviews</p>
            <ListGroup variant="flush">
                {
                    Array.from({length:5}).map((_,idx)=>(
                        <ListGroup.Item key={idx}>

                            <span style={{fontSize:"15px"}}>Syed Ali Aatif</span> <br/>
                            <span style={{fontSize:"12px"}}><span className="fw-bold" style={{fontSize:"13px"}}>Date: </span>25/12/2022</span> <br/>
                            <span className="fw-bold" style={{fontSize:"13px"}}>Rating: </span><Rating size={15} initialValue={3}/>
                            <p style={{fontSize:"13px"}}><span className="fw-bold">Review: </span> Praesent malesuada tortor sed gravida accumsan. 
                            Nam imperdiet mi magna, vitae mattis magna iaculis vitae. Ut ac neque nisl.</p>

                        </ListGroup.Item>
                    ))
                }
            </ListGroup> 

            </Col>
        </Row>
        <hr/>
        <Alert  variant={"danger"}>
          Login first to send a review! 
        </Alert>
        <Form>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="fw-bold">Write A Review</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Form.Select>
                <option>Rating</option>
                {
                    Array.from({length:5}).map((_,idx)=>(
                        <option value={idx+1} key={idx}>{idx+1}</option>
                    ))
                }
            </Form.Select>
            <Button className="mt-3" variant="primary" type="submit">
                Submit Your Review 
            </Button>
        </Form> 
       </Col>
       </Row>
       </Container>
    )
}
export default ProductDetailsPage;