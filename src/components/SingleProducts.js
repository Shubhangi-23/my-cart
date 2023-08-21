import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProducts = ({prod}) => {
 const {
  state:{cart},
  dispatch,
 } = CartState()
  return (
    <div className='products'>
    <Card>
         <Card.Img variant='top' src={prod.image} alt={prod.name}/>
         <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom:10}}>
            <span>Rs. {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ?(
              <div>fastDelivery</div>
            ):(
              <div>3 days Delivery</div>
            )}
            <Rating rating={prod.rating}/>
          </Card.Subtitle>
          {
            cart.some(p=>p.id===prod.id)?(<Button
                          onClick={()=>{
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload:prod,
                });
              }}
             variant='danger'>Remove Item</Button>):(
              <Button 
              onClick={()=>{
                dispatch({
                  type: "ADD_TO_CART",
                  payload:prod,
                });
              }}
              disabled={!prod.instock}>
          {!prod.instock ? "out of stock":"Add Item"}</Button> 
            )}
                   

         </Card.Body>

    </Card>
      
    </div>
  )
}

export default SingleProducts
