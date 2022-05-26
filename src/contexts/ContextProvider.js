import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    userProfile: false
}

const initialFilter = {
    yesterday: false,
    last7Days: false,
    last30Days: false,
    thisMonth: false,
    custom: false
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState)
    const [activeFilter, setActiveFilter] = useState(false);
    const [isClickedFilter, setIsClickedFilter] = useState(initialFilter)
    const [activeCalendar, setActiveCalendar] = useState(true)


    
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    const handleClickFilter = (clicked) => {
        setIsClickedFilter({...initialFilter, [clicked]: true})
    }


    return (
        <StateContext.Provider value={{
            activeMenu: activeMenu,
            setActiveMenu: setActiveMenu,
            isClicked: isClicked,
            setIsClicked: setIsClicked,
            handleClick: handleClick,
            activeFilter: activeFilter,
            setActiveFilter: setActiveFilter,
            handleClickFilter: handleClickFilter,
            isClickedFilter: isClickedFilter,
            setIsClickedFilter: setIsClickedFilter,
            activeCalendar,
            setActiveCalendar
         }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)