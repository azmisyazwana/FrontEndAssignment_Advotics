import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker} from 'react-date-range';
import './Dashboard.css'
import { addMonths } from 'date-fns/esm';
import Calendar from '../components/Calendar';
import help from '../data/Help.png'
import {IoIosArrowUp} from 'react-icons/io'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import cart from '../data/cart.svg'
import { BsArrowDownShort } from 'react-icons/bs'
import Product from '../components/Product';
import avatar from '../data/avatar.jpg'
import ListProductLeft from '../components/ListProductLeft';
import ListProductRight from '../components/ListProductRight';
import {Chart} from '../components/index'


const Dashboard = () => {

  return (
    <div className='mt-5'>
      <Calendar />
      <div className='flex flex-wrap lg:flex-nowrap justify-center '>
        <div className='flex box-border h-48 w-full p-2 mr-10 ml-10 mb-3 mt-3 bg-market-insight items-center justify-between'>
          <h2 className='text-2xl text-white ml-2'>MARKET INSIGHTS</h2>
          <div className='flex mr-2 text-white items-center gap-2'>
            <div>
              <img src={help} alt="" />
            </div>
            <h1 className='underline font-extralight'>
              Click Here for Help
            </h1>
            <IoIosArrowUp />
          </div>
        </div>
      </div>

      <div className='flex flex-wrap lg:flex-nowrap justify-start ml-10 '>
        <div className='flex flex-col box-border h-104 p-2 mt-3 bg-white card w-276 justify-around'>
          <div className='flex items-center justify-between'>
            <h2 className='text-base text-gray-400 font-normal'>Sales Turnover</h2>
            <div className='text-xl'>
              <HiOutlineDotsVertical/>
            </div>
          </div>
          <div className='flex items-center'>
            <div>
              <p className='text-2xl font-bold'>Rp 3,600,000</p>
              <p className='text-xs font-light'><span><BsArrowDownShort style={{display: 'inline-block', color: 'red'}} className='text-xl'/></span> <span style={{color: 'red'}}>13.8%</span> last period in product sold</p>
            </div>
            <img style={{width: '50px'}} src={cart}/>
          </div>
        </div>
      </div>

      <div className='flex gap-5 ml-10 mr-10 mt-5 justify-between'>
        <div id="Chart" className='card'>
          <div className='flex ml-10 mr-5 mt-5 mb-5 justify-between'>
            <h1 className='text-xl font-semibold first-letter '>AVERAGE PURCHASE VALUE</h1>
            <div className='flex items-center gap-3'>
              <select name="filterChart" id="filterChart">
                <option value="last6Months">Last 6 Months</option>
                <option value="last3Months">Last 3 Months</option>
                <option value="lastMonths">Last Months</option>
                <option value="lastWeek">Last Week</option>
             </select>
             <HiOutlineDotsVertical className='text-xl' />

            </div>
          </div>
          <Chart width="700px" height="350px" />
        </div>
        <ListProductLeft />
        <ListProductRight />
      </div>
      
    </div>
  )
}

export default Dashboard