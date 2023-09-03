import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, addToCart } from '../../features/cartSlice'
import { useEffect } from 'react';
import { useState } from 'react';

const Cart = () => {

  const dispatch = useDispatch();

  const DATA = useSelector((state)=> state.cart);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(()=>{
    let cart =0;
    DATA.forEach(Data => {
      cart += (Data.price * Data.quantity)
    });
    setCartTotal(cart);
  },[DATA])


  const handleRemove =(id)=>{
    dispatch(removeFromCart(id))
  }

  const handleUpdate = (Data)=>{
    dispatch(addToCart(Data))
  }

  return (
    <>
    <section className='cart-section'>
            
        {/* EMPTY CART */}
        {
        !DATA.length? 
          

        
        
            

        

        <div className="empty-cart">

            <div className='empty-cart-left'>
                <h1>Cart Empty 😕</h1>
                <p>You probably haven't ordered a pizza yet.<br />
                    To order a pizza, go to the main page.
                </p>
                <Link to='/'><button>Go Back</button></Link>
            </div>

            <img src="./empty-cart.png" alt="" />


        </div>
        

        :


        <div className="cart-data">
          <h3>Cart items</h3>


          

          {DATA.map((data)=>(
            <div key={data.product.id} className="cart-display">


            <div className="name-image">
            <img src={data.product.img_url} alt="" />
            <div className="name-veg">
            <h3>{data.product.name}</h3>
            {data.product.isVeg? 
                <span className='type' style={{"background":"rgb(203, 245, 203)","color":"darkgreen"}}>Veg</span> : 
                <span className='type' style={{"background":"#f4d3d5","color":"#ff4555"}}>Non-Veg</span>
            }
            </div>
            </div>


            <div className="addons-cart">
              <div className="size-cart">{data.size}</div>
              <div className="toppings-cart">
                {data.toppings.map((topping)=>(
                  <span key={topping}>-{topping}</span>
                ))}
                
              </div>
            </div>


            <div className="incri-decri">
              <span className='incri' onClick={()=> handleUpdate(data)}>+</span>
              <span>{data.quantity}</span>
              <span className='decri' onClick={()=> handleRemove(data.product.id)}>-</span>
            </div>

            <div className='price-cart'>
              <span>₹ {data.price * data.quantity}</span>
            </div>
            

          </div>
          ))}


          <hr/>


          <div className="total">
            <span>Grand Total:</span>
            <div className='price-cart'>
              <span>₹ {cartTotal}</span>
            </div>
          </div>


          <div className="order-button">
            <button>Order Now</button>
          </div>



        </div>

        

      }


    </section>
    </>
  )
}

export default Cart