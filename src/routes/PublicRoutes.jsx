import React from 'react';

import { Route, Routes } from 'react-router-dom';

import {Home, Favorites, Character, NotFound404} from '@pages';

import MainLayout from '@components/Layouts/MainLayout';

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='character/:name' element={<Character />} />
        </Route>
        <Route path="*" element={< NotFound404  />} />
      </Routes>
    </>
  )
}

export default PublicRoutes