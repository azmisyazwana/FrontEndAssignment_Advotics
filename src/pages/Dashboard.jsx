import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker} from 'react-date-range';
import './Dashboard.css'
import { addMonths } from 'date-fns/esm';
import Calendar from '../components/Calendar';

const Dashboard = () => {

  return (
    <div className='mt-12'>
      <Calendar />
      <div className='flex flex-wrap lg:flex-nowrap justify-center '>
        <div className='flex box-border h-48 w-full p-2 mr-10 ml-10 mb-3 mt-3 bg-market-insight items-center justify-between'>
          <h2 className='text-2xl text-white ml-2'>MARKET INSIGHTS</h2>
          <div className='mr-2 text-white'>
            Click Here for Help
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard