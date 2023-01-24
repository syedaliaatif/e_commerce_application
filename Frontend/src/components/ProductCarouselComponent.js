import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


function ProductCarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Carousel/carousel-1.png"
          alt="First slide"
          style={{height:"300px", objectFit:"cover"}}
        />
        <Carousel.Caption>
          <LinkContainer style={{cursor:"pointer"}} to="/product-details"><h3>Best Seller in Books Category</h3></LinkContainer>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Carousel/carousel-2.png"
          alt="Second slide"
          style={{height:"300px", objectFit:"cover"}}
        />

        <Carousel.Caption>
        <LinkContainer style={{cursor:"pointer"}} to="/product-details"><h3>Best Seller in Books Category</h3></LinkContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Carousel/carousel-3.png"
          alt="Third slide"
          style={{height:"300px", objectFit:"cover"}}
        />

        <Carousel.Caption>
        <LinkContainer style={{cursor:"pointer"}} to="/product-details"><h3>Best Seller in Books Category</h3></LinkContainer>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent;