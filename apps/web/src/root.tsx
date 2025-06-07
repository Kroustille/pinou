import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from './module/ui/nav'

export const Root: React.FC = () => {
  return <>
    <Nav />
    <main>
      <Outlet />
    </main>
  </>
}