import { Form } from "react-bootstrap";

const SortOptionComponent=()=>{
    return (
        
            <Form.Select aria-label="Default select example">
                <option>SORT BY</option>
                <option value="price_1">Price: Low to High</option>
                <option value="price_-1">Price: High to Low</option>
                <option value="rating_-1">Customer Rating</option>
                <option value="name_1">Name: A to Z</option>
                <option value="name_-1">Name : Z to A</option>
            </Form.Select>
        
    );
}

export default SortOptionComponent; 