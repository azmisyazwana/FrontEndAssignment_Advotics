import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaChartBar } from 'react-icons/fa'
import { CgMenu } from 'react-icons/cg'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import './Sidebar.css'

import { links } from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-2xl bg-neutral-300";
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2 text-2xl"

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      <>
        <div className='flex justify-between items-center'>
          <div className='items-center gap-3 mt-4 ml-2 flex text-2xl font-extrabold tracking-tight text-slate-900' style={{paddingLeft: '8px'}}>
            <CgMenu className='icon-menu cursor-pointer hover:bg-light-gray rounded-full' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu ) } />
            {activeMenu && (
              <span>Menu</span>
            )}
          </div>
          <TooltipComponent content="Close" position='BottomCenter'>
            <button type='button' onClick={() => {setActiveMenu(false)}} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel/>
            </button>
          </TooltipComponent>
        </div>
        <div>
          {links.map((item) => (
            <div key={item.title}>
              {/* <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p> */}
              {item.links.map((link) => (
                <NavLink to={`/${link.name}`} key={link.name} onClick={() => {}} className={({isActive}) => isActive ? activeLink : normalLink } >
                  {link.icon}
                  {activeMenu && (
                    <span className='capitalize'>
                      {link.name}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>
    </div>
  )
}

export default Sidebar