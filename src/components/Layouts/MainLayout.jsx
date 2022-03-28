import React from 'react';

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import NavBar from '../pages/NavBar';
import Footer from '../pages/Footer';

const MainLayout = () => {

  const { theme } = useSelector(state => state.starWarsReducer); 


  return (
    <div
      className={`${theme ? 'light' : 'dark'}`}
    >
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout