import React from 'react'
import { useState } from 'react';
import './Modal.css'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../features/cartSlice';

const Modal = ({open, onClose, product}) => {

    const dispatch = useDispatch();

    const [size, setSize] = useState('Regular');
    //const [item, setItem] = useState('Regular');
    const [toppings, setToppings] = useState([])
   

    const updateSize = (e)=>{
        setSize(e.target.value);
        
    }

    const updateToppings = (e)=>{
        if(e.target.checked){
            setToppings([...toppings,e.target.value]);
        }
        else{
            const remaining = toppings.filter(word=> word!==e.target.value);
            // console.log(remaining);
            setToppings([...remaining])
        }
    }

    const handleButton =() =>{
        let effectivePrice= product.price;
        switch(size){
            case 'Regular': effectivePrice = product.price;
                break;
            case 'Medium': effectivePrice = product.price + 100 ;
                break;
            case 'Large': effectivePrice = product.price +200;
                break;
            default:
                break;
            
        }
        //console.log(effectivePrice);
        const cartAdd = {
            product: product,
            size: size,
            toppings: toppings,
            quantity: 1,
            price: effectivePrice

        }

        dispatch(addToCart(cartAdd));

        onClose();
    }

    // useEffect(()=>{
    //     //setItem(size);
    //     console.log(size);
        
    // },[size])
    // useEffect(()=>{
    //     console.log(toppings);
    // },[toppings])

    if(!open){
        return null
    }
  return (
  <>
    
    <div onClick={onClose} className="overlay">
        <div onClick={(e) => {e.stopPropagation()}} className="modal-container">
            
            <div className="size">
                <span>Size:</span>
                <div className='radio-size'>
                    {product.size[0]?.items.map((sizeData)=>(

                    <div key={sizeData.size}>
                        <input type="radio" id={sizeData.size} name="size" value={sizeData.size} onChange={updateSize}/>
                        <label htmlFor={sizeData.size}>{sizeData.size}</label>
                    </div>

                    ))}


                    {/* <div>
                        <input type="radio" id="Regular" name="size" value="Regular" onChange={updateSize}/>
                        <label htmlFor="Regular">Regular</label>
                    </div>
                    <div>
                        <input type="radio" id="Medium" name="size" value="Medium" onChange={updateSize}/>
                        <label htmlFor="Medium">Medium</label>
                    </div>
                    <div>
                        <input type="radio" id="Large" name="size" value="Large" onChange={updateSize}/>
                        <label htmlFor="Large">Large</label>
                    </div> */}


                </div>
            </div>

            <div className="toppings">
                <span>Toppings:</span>
                
                    <ul className='dropdown'>


                    {product.toppings[0]?.items.map((sizeData)=>(
                        <li key={sizeData.name}>
                            <input type="checkbox" id={sizeData.name} name={sizeData.name} value={sizeData.name} onChange={(updateToppings)} />
                            <label htmlFor={sizeData.name}>{sizeData.name}</label>
                        </li>
                    ))}




                        {/* <li>
                            <input type="checkbox" id="Red Pepper" name="Red Pepper" value="Red Pepper" onChange={(updateToppings)} />
                            <label htmlFor="Red Pepper">Red Pepper</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Onion" name="Onion" value="Onion" onChange={(updateToppings)} />
                            <label htmlFor="Onion">Onion</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Grilled Mushroom" name="Grilled Mushroom" value="Grilled Mushroom" onChange={(updateToppings)} />
                            <label htmlFor="Grilled Mushroom">Grilled Mushroom</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Extra Cheese" name="Extra Cheese" value="Extra Cheese" onChange={(updateToppings)} />
                            <label htmlFor="Extra Cheese">Extra Cheese</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Black Olive" name="Black Olive" value="Black Olive" onChange={(updateToppings)} />
                            <label htmlFor="Black Olive">Black Olive</label>
                        </li> */}




                    </ul>
                
            </div>

            <button onClick={handleButton}>Order</button>

        </div>
    </div>
    </>
  )
}

export default Modal