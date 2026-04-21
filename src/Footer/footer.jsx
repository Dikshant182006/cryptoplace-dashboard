import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#090909] h-[80vh]'>
      <div className='flex flex-col gap-6 p-10'>
      <Link className='text-white transition-all duration-300 hover:cursor-pointer'>About Us</Link>
      <Link>CryptoNews</Link>
      <Link>CryptoCurrencies</Link>
      <Link>Help Center</Link>
      </div>

      <h2 className='text-8xl flex justify-center items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent'>CryptoPlace</h2>
    </div>
  )
}

export default Footer
