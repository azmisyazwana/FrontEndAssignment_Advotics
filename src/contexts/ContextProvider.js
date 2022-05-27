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

const initialProductLeft = {
    product1: true,
    product2: false,
    product3: false,
    product4: false,
    product5: false,
}
const clickProductLeft = {
    product1: false,
    product2: false,
    product3: false,
    product4: false,
    product5: false,
}
const initialProductRight = {
    product1: true,
    product2: false,
    product3: false,
    product4: false,
    product5: false,
}
const clickProductRight = {
    product1: false,
    product2: false,
    product3: false,
    product4: false,
    product5: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState)
    const [activeFilter, setActiveFilter] = useState(false);
    const [isClickedFilter, setIsClickedFilter] = useState(initialFilter)
    const [activeCalendar, setActiveCalendar] = useState(false)
    const [isClickedProductLeft, setIsClickedProductLeft] = useState(initialProductLeft)
    const [isClickedProductRight, setIsClickedProductRight] = useState(initialProductRight)



    
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    const handleClickFilter = (clicked) => {
        setIsClickedFilter({...initialFilter, [clicked]: true})
    }
    const handleClickProductLeft = (clicked) => {
        setIsClickedProductLeft({...clickProductLeft, [clicked]: true})
    }
    const handleClickProductRight = (clicked) => {
        setIsClickedProductRight({...clickProductRight, [clicked]: true})
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
            setActiveCalendar,
            isClickedProductLeft,
            setIsClickedProductLeft,
            handleClickProductLeft,
            isClickedProductRight,
            setIsClickedProductRight,
            handleClickProductRight
         }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)