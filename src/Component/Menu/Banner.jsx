import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <>
    <section className='banner-section'>
        <div className="banner-container">

            <div className="banner-left">
                <h1>Hungry? You're in the right place</h1>
                <p>Order pizza loaded with 2X Toppings from India's Highest Rated Pizza Delivery Chain.</p>
                <button>Order Now</button>
            </div>

            <div className="banner-right">
                <img src="./hero-pizza.png" alt="pizza" />
            </div>

        </div>
    </section>
    </>
  )
}

export default Banner