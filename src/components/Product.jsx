import React from 'react'
import './Product.css'

const Product = ({img, color, isActive, customFunc}) => {
  return (
    <div onClick={customFunc} className={isActive ? 'flex w-243 rounded-lg mt-2 mb-2 cursor-pointer' : 'flex w-243 card rounded-sm mt-2 mb-2 cursor-pointer hover:opacity-60'}>
        <img className={isActive ? 'w-80': 'w-60'} src={img} alt="" />
        <div className={isActive ? 'flex flex-col bg-product-active pl-3 pt-1 pb-1 justify-around w-165' : 'flex flex-col pl-3 pt-1 pb-1 justify-around w-full' }>
            <h1 className='text-xl font-normal'>[Nama Product]</h1>
            <div className='flex justify-between mr-2'>
                <p className='font-light'>Rp XXXX</p>
                <p className='font-light'>[jml terjual]</p>
            </div>
        </div>
    </div>
  )
}

export default Product