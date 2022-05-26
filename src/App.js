import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar } from './components';
import Dashboard from './pages/Dashboard';

import './App.css'

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="relative">
          <Navbar />
        </div>
        {/* <div className='bg-white'>
          TES
        </div> */}
        <div className="flex dark:bg-main-dark-bg">
          {/* sidebar */}
          {activeMenu ? (
            <div className='w-72 sidebar bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='sidebar bg-white' style={{width: '100px'}}>
              <Sidebar />
            </div>
          )}
          {/* navbar */}
          <div className={
            `bg-main-bg min-h-screen w-full ${activeMenu ? '' : 'flex-2'}`
          }>
          {/* routing */}
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/" element="Dashbaord"/> */}
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App