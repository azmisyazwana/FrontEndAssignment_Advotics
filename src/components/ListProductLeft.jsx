import React from 'react'
import Product from './Product'
import avatar from '../data/avatar.jpg'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import '../pages/Dashboard.css'
import { useStateContext } from '../contexts/ContextProvider'

const ListProductLeft = () => {
    const {isClickedProductLeft, setIsClickedProductLeft, handleClickProductLeft} = useStateContext();

  return (
    <div className='flex flex-col items-center card p-2 inline-block justify-around'>
        <div className='flex items-center justify-between w-275' >
            <h1 className='text-xl'>BEST SELLING SKU</h1>
            <HiOutlineDotsVertical className='text-xl' />
        </div>
        <div>
            <Product customFunc={() => handleClickProductLeft('product1')} img={avatar} isActive={isClickedProductLeft.product1} />
            <Product customFunc={() => handleClickProductLeft('product2')} img={avatar} isActive={isClickedProductLeft.product2} />
            <Product customFunc={() => handleClickProductLeft('product3')} img={avatar} isActive={isClickedProductLeft.product3} />
            <Product customFunc={() => handleClickProductLeft('product4')} img={avatar} isActive={isClickedProductLeft.product4} />
            <Product customFunc={() => handleClickProductLeft('product5')} img={avatar} isActive={isClickedProductLeft.product5} />
        </div>
    </div>
  )
}

export default ListProductLeft
