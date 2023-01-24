import React from "react";
import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import { Container, Row } from "react-bootstrap";
const HomePage = ()=>{
   var categories=['Tablet','Movies','Cars','Bikes','Electronics','PC','Fashion'] 
   var images_loc=['images/games-category.png', 'images/tablets-category.png', 'images/monitors-category.png', 'images/games-category.png', 
   'images/games-category.png','images/games-category.png','images/tablets-category.png','images/monitors-category.png']
   return (
      <div>
         <ProductCarouselComponent/>
         <Container>
         <Row xs={1} md={2} className="g-4 mt-5 mb-5">

         {
            categories.map((category, idx)=><CategoryCardComponent key={idx} cardTitle={category} img={images_loc[idx]}/>)
         }
         </Row>
         </Container> 
      </div>
   )
}
export default HomePage ; 

