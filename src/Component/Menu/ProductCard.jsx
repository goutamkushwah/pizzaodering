import React from 'react'
import Modal from './Modal';
import './ProductCard.css'
import { useState } from 'react';



const ProductCard = ({ product }) => {

  const [openModal, setOpenModal] = useState(false);

  // useEffect(()=>{
  //   if(product.isVeg)
  // },[])

  return (
    <>
    <div className='product-card'>
                <img src={product.img_url} alt="" />
                
                <h3>{product.name}</h3>

                <div className="rating-type">
                    <span className='rating'>⭐{product.rating}</span>
                    {product.isVeg? 
                    <span className='type' style={{"background":"rgb(203, 245, 203)","color":"darkgreen"}}>Veg</span> : 
                    <span className='type' style={{"background":"#f4d3d5","color":"#ff4555"}}>Non-Veg</span>}

                     
                </div>
                <div className="price">
                    <span>₹ {product.price}</span>
                    <button onClick={() => setOpenModal(true)}>Order</button>
                </div>

    </div>
    <Modal open={openModal} product={product}  
      onClose={() => setOpenModal(false)}/>
    </>
  )
}

export default ProductCard