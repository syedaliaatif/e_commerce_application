import { Button, Card } from "react-bootstrap";

const CategoryCardComponent=({cardTitle,img})=>{
    return (
        <Card >
          <Card.Img crossOrigin="anonymous" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}
export default CategoryCardComponent; 