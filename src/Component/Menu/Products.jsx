import React from 'react'
import './Products.css'
import ProductCard from './ProductCard'
import { fetchProducts } from '../../features/productSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Products = () => {

  const dispatch = useDispatch();
  const DATA = useSelector((state) => state.product.data);
  //console.log(DATA);

  const [products, setProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');


  const handleFilter = (e)=> {
    // console.log(e.target.innerText);
    // e.target.parentNode.style.color = '#ff4555';

    setSelectedFilter(e.target.getAttribute('value'));

    switch (e.target.innerText) {
      case 'All':
        setProducts(DATA);
        break;

      case 'Veg': 
        setProducts(DATA.filter((data)=>{return data.isVeg===true}));
        break;

      case 'Non-Veg': 
        setProducts(DATA.filter((data)=>{return data.isVeg===false}));
        break;

      case 'Most-Rated':
        setProducts([...DATA].sort((a, b) => b.rating - a.rating));
        break;

      case 'Price-Lowest':
        setProducts([...DATA].sort((a, b) => a.price - b.price));
        break;

      case 'Price-Highest':
        setProducts([...DATA].sort((a, b) => b.price - a.price));
        break;
    
      default: setProducts(DATA);
        break;
    }
    //console.log(products[0]);
  }

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])
  useEffect(()=>{
    setProducts(DATA)
    //console.log(products[0]);
  }, [DATA])

  

  


  return (
    <>
    <section className="products-section">
        <div className="products-header">
            <h1>Discover Over Menu</h1>
            <ul className="products-filter">
                <li key='all' className={selectedFilter === 'all' ? 'active' : ''}
                  onClick={handleFilter} value='all'>All</li>
                <li key='veg' className={selectedFilter === 'veg' ? 'active' : ''} 
                onClick={handleFilter} value='veg'>Veg</li>
                <li key='non-veg' className={selectedFilter === 'non-veg' ? 'active' : ''}
                onClick={handleFilter} value='non-veg'>Non-Veg</li>
                <li key='rating' className={selectedFilter === 'rating' ? 'active' : ''} 
                onClick={handleFilter} value='rating'>Most-Rated</li>
                <li key='price-lowest' className={selectedFilter === 'price-lowest' ? 'active' : ''}
                onClick={handleFilter} value='price-lowest'>Price-Lowest</li>
                <li key='price-highest' className={selectedFilter === 'price-highest' ? 'active' : ''}
                onClick={handleFilter} value='price-highest'>Price-Highest</li>
            </ul>

        </div>
        <div className="products-container">
            
            
            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}



        </div>
    </section>
    
    </>
  )
}

export default Products