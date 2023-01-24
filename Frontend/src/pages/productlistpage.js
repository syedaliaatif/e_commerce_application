import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import SortOptionComponent from "../components/SortOptionsComponent";
import ProductForListComponent from "../components/ProductForListComponent";
import PaginationComponent from "../components/PaginationComponent";
import PriceFilterComponent from "../components/FilterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../components/FilterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../components/FilterQueryResultOptions/CategoryFilterComponent";
import AttributeFilterComponent from "../components/FilterQueryResultOptions/AttributesFilterComponent";
const ProductListPage =()=>{

    return (
        <Container fluid>
        <Row>
            <Col md={3}>
            <ListGroup variant="flush">
                <ListGroup.Item className="my-3"><SortOptionComponent/></ListGroup.Item>
                <ListGroup.Item>FILTER:<br/><PriceFilterComponent/></ListGroup.Item>
                <ListGroup.Item><RatingFilterComponent/></ListGroup.Item>
                <ListGroup.Item><CategoryFilterComponent/></ListGroup.Item>
                <ListGroup.Item><AttributeFilterComponent/></ListGroup.Item>
            </ListGroup>
            </Col>
            <Col md={9}>
            <Container>
                {
                    Array.from({length:5}).map((_,idx)=>(
                        <ProductForListComponent key={idx}/>
                    ))
                }
                
                <PaginationComponent/>
            </Container>
            </Col>
        </Row>

        </Container>
    )

}
export default ProductListPage; 