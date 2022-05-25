import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    userProfile: false
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState)
    
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    return (
        <StateContext.Provider value={{
            activeMenu: activeMenu,
            setActiveMenu: setActiveMenu,
            isClicked: isClicked,
            setIsClicked: setIsClicked,
            handleClick: handleClick
         }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)