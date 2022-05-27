import React from 'react'
import Product from './Product'
import avatar2 from '../data/avatar2.jpg'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import '../pages/Dashboard.css'
import { useStateContext } from '../contexts/ContextProvider'

const ListProductRight = () => {
    const {isClickedProductRight, setIsClickedProductRight, handleClickProductRight} = useStateContext();

  return (
    <div className='flex flex-col items-center card p-2 inline-block justify-around'>
        <div className='flex items-center justify-between w-275' >
            <h1 className='text-xl'>TOP COMPETITOR SKU</h1>
            <HiOutlineDotsVertical className='text-xl' />
        </div>
        <div>
            <Product customFunc={() => handleClickProductRight('product1')} img={avatar2} isActive={isClickedProductRight.product1} />
            <Product customFunc={() => handleClickProductRight('product2')} img={avatar2} isActive={isClickedProductRight.product2} />
            <Product customFunc={() => handleClickProductRight('product3')} img={avatar2} isActive={isClickedProductRight.product3} />
            <Product customFunc={() => handleClickProductRight('product4')} img={avatar2} isActive={isClickedProductRight.product4} />
            <Product customFunc={() => handleClickProductRight('product5')} img={avatar2} isActive={isClickedProductRight.product5} />
        </div>
    </div>
  )
}

export default ListProductRight
