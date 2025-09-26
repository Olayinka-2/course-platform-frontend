import SideBar from '@/layouts/SideBar'
import React from 'react'


const MainLayout = ({children} : {
  children: React.ReactNode;
}) => {
  return (
    <div className='flex min-h-screen'>
      <SideBar />
      <main className='flex-1 p-3 bg-gray-100'>
        {children}
      </main>
    </div>
  )
}

export default MainLayout
