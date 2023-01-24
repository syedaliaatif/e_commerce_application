import { Fragment } from "react"
import { Rating } from "react-simple-star-rating"
import { Form } from "react-bootstrap"

const RatingFilterComponent=()=>{

    var ratings = ['5','4','3','2','1']; 

  return (
    <>
    <span className="fw-bold">Rating</span>
    {ratings.map((numStars)=>(
    <Fragment key={numStars}>
    <Form.Check type="checkbox" id={`check-api`} >
    <Form.Check.Input type="checkbox" isValid />
    <Form.Check.Label style={{cursor:"pointer"}}>{
            <Rating readonly size={20} initialValue={numStars}/>
    }</Form.Check.Label>
    </Form.Check>
    </Fragment>))}
    </>
  )  
}

export default RatingFilterComponent; 