import { Form } from "react-bootstrap";

const AttributeFilterComponent=()=>{

    return (
        <>
        {[{color:["red","blue","green"]}, 
        {ram:["500 MB","1 TB", "2 TB"]}].map((item,idx)=>{
                return (
                    <div key={idx}>
                    <Form.Label><b>{Object.keys(item)}</b></Form.Label>
                    {
                        
                        item[Object.keys(item)].map((it,idx)=>(
                            
                            <Form.Check key={idx} type="checkbox" id="default-checkbox" label={it}/>
                        )
                        )
                    }  
                    </div>)
         })
        }
            
        </>
    )
}

export default AttributeFilterComponent; 