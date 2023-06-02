import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/NavBar';

export default function SharedLayout() {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  )
}