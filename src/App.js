import React, { useEffect } from 'react'
import './App.css';
import Header from './Component/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Component/Footer';


function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="App">
      <Header />
      
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
