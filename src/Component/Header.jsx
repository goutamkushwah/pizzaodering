import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {

    //const dispatch = useDispatch();

    const [cartItems,setCartItems] = useState(0);

    const DATA = useSelector((state)=> state.cart);
    //console.log(DATA);
    

    useEffect(()=>{
        let no = 0;
        DATA.forEach(element => {
            
            no += element.quantity;
        });
        setCartItems(no);
    },[DATA])


  return (
    <nav>
        <div className="widthSet">
            <div className="logo">
            <Link to='/'><img src="./logo.png" alt="logo" /></Link>
            </div>
            <ul className="lists">
                <li className="list-item"><Link to="/" className='list-align'><h1>Home</h1></Link></li>
                
                <li className="list-item cart">
                    <Link to="/cart" className='list-align '>
                        <span className='float'>{cartItems}</span>
                        <img src="./cart-black.png" alt="cart-img" />
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header

