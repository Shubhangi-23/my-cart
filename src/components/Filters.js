
import { Button ,Form} from "react-bootstrap"
import Rating from "./Rating";
import { CartState } from "../context/Context";
import { productReducer } from "../context/Reducers";
import{cartReducer} from "../context/Reducers"


const Filters = ()=>{
    

     const {productState,productDispatch} =CartState()
     

     
    return(
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                inline
                label="Ascending"
                name="group1"
                type="radio"
                id={"inline-1"}
                />
            </span>
            <span>
                <Form.Check
                inline
                label="Descending"
                name="group1"
                type="checkbox"
                id={"inline-2"}
                />
            </span>
            <span>
                <Form.Check
                inline
                label="Include Out Of Stock"
                name="group1"
                type="checkbox"
                id={"inline-3"}
                />
            </span>
            <span>
                <Form.Check
                inline
                label="Fast Delivery Only"
                name="group1"
                type="checkbox"
                id={"inline-4"}
                />
            </span>
            <span>
                <label style={{paddingRight:10}}>Rating:</label>
                <Rating rating ={Rating}
                onClick={(i)=>
                productDispatch({
                    type:"FILTER_BY_RATING",
                    payload:i+1
                })}
                style={{cursor:'pointer'}}/>
            
            </span>
            <Button varient ="light">Clear Filters</Button>

        </div>
    )
}

export default Filters;