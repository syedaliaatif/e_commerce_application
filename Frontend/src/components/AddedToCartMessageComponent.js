import { useState } from "react";
import { Alert,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddedToCartMessageComponent=()=>{
    const [show, setShow] = useState(true);

    if (show) {
      return (
        <Alert  className ="my-4" variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Added to cart!</Alert.Heading>
          <Button variant="success" className="mx-2">Go Back</Button>
          <Link to="/cart" ><Button variant="danger">Go to Cart</Button></Link>
        </Alert>
      );
    }
    //return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AddedToCartMessageComponent; 