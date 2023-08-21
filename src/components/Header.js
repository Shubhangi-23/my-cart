import React from 'react'
import {Container , FormControl, Nav, Navbar,Dropdown, Badge, Button} from "react-bootstrap"
import {FaAlignLeft, FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'

const Header = () => {
   const{
    state:{cart},dispatch}
    =
    CartState()
  return < Navbar bg='primary' variant='primary' style={{height:80,color:"white"}}>
  <Container>
  <Navbar.Brand>
  <Link  to href ="/"  style={{color:"white"}}>Shopping Cart</Link>
</Navbar.Brand>
<Navbar.Text className='search'>
  <FormControl style={{width:500}} placeholder='Search a product' className='m-auto'
  />
  
</Navbar.Text>
<Nav>
    <Dropdown >
    

      <Dropdown.Toggle variant="warning" >
      Cart
        
        <Badge style={{color:"white"}}>{cart.length}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{minWidth:70 }} >
      

      {cart.length>0? (
        <>
          { cart.map((prod)=>(
            <span className='cartitem' key={prod.id}>
              <img
              src={prod.image}
              className='cartItemImage'
              alt={prod.name}
              />
              <div className='cartItemDetail'>
                <span>
                  {prod.name}
                </span>
                <span>Rs. {prod.price.split(".")[0]}</span>
              </div>
              <AiFillDelete
              fontSize="20px"
              style={{cursor:"poiter"}}
              onClick={()=>
               dispatch({
                type:"REMOVE_FROM_ITEM",
                payload:prod,
              }) 
              }
              />
            </span>
          ))

          }
          <Link to = '/cart'>
            <Button style={{width:"70%",margin:"0 10px"}}>
              Go To Cart
            </Button>
          </Link>
        </>
        
      ):(<span style={{padding:10}}></span>)}
      <FaShoppingCart color="white" fontSize="25px"/>
      <span style={{padding:10}}></span>
      </Dropdown.Menu>
    </Dropdown>






</Nav>




  </Container>






  </Navbar>
    
      

  
}

export default Header
