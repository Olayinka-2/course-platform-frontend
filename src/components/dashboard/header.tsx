import React from 'react'
import {FaSearch, FaEnvelope, FaBell} from "react-icons/fa"

const Header:React.FC = () => {
  return (
    <div className='bg-white flex items-center justify-between p-5 rounded-lg'>
      <div>
        <p className='bold text-2xl'>Welcome back, Peter</p>
        <p className='text-xs font-light text-gray-300'>Let's boots your knowledge today and learn a new thing</p>
      </div>
      <div className='flex items-center gap-6'>
        <FaSearch className='w-5 h-5 cursor-pointer font-light' />
        <FaEnvelope  className='w-5 h-5 cursor-pointer font-light' />
        <FaBell  className='w-5 h-5 cursor-pointer font-light' />
        <img src="/assets/profile.png" alt="Profile photo" className='w-10 h-10 cursor-pointer' />
      </div>
    </div>
  )
}

export default Header
