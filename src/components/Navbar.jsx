import React, { useContext, useEffect } from 'react'
import { MdKeyboardArrowDown, MdOutlineLogout }  from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'
import { Link } from 'react-router-dom'

import './Navbar.css'
import logo from '../data/logo.jpg' 

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title}
  position="BottomCenter">
    <button type='button' onClick={customFunc} style={{color: color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick} = useStateContext();
  
  return (
    <div className='flex justify-between p-2 relative navbar items-center'>
      <Link to='/' className='items-center flex relative logo-2 cursor-pointer'>
          <div className='logo flex-initial w-82'>
            <img src={logo} alt="" />
          </div>
          <div className='flex-initial flex ml-2 relative top-2'>
            <p className='font-logo flex-initial mr-2'>
              powered by
            </p>
            <div className='logo-sm flex-initial'>
              <img src={logo} alt="" />
            </div>
          </div>
      </Link>
      <div className="flex">
        <TooltipComponent 
        content="Profile"
        position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
          onClick={() => {handleClick("userProfile")}}>
            <div>
              <p className='text-gray-400 text-14 items-center text-center'>
                Username
              </p>
              <p className= 'text-10' style={{color: '#727272'}}>
                Company Name
              </p>
            </div>
            <img 
            className='rounded-full w-8 h-8'
            src={avatar}
            />
          </div>
        </TooltipComponent>
        {isClicked.userProfile && <UserProfile />}
        <NavButton title="Logout" icon={<MdOutlineLogout />} />
      </div>
    </div>
  )
}

export default Navbar
