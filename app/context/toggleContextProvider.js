"use client";


import React, { createContext, useState } from "react";
export const toggleContext=createContext();
export const ToggleContextProvider=({children})=>{
    const [toggleSideBar,setToggleSideBar]=useState(false)
    return(
        <toggleContext.Provider value={{toggleSideBar,setToggleSideBar}}>
        {children}
        </toggleContext.Provider>
    )
}