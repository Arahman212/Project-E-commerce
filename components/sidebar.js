"use client";

import { toggleContext } from "@/app/context/toggleContextProvider";
import { motion } from "framer-motion";
import React, { useContext } from "react";
const Sidebar = () => {
    const { toggleSideBar, setToggleSideBar } = useContext(toggleContext)

    const handleToggle = () => {
        setToggleSideBar(!toggleSideBar)
    }
    return (
        <>
            <div className={`w-[100vw] bg-black/50 h-[100vh] ${toggleSideBar ? "fixed" : "hidden"} top-0 z-10`} onClick={handleToggle}>
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: toggleSideBar ? 0 : '-100%' }} // Move to 0 when open, 100% when closed
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Smooth animation
                    className="w-[250px] bg-white h-[100vh]">

                    <div className="w-[100%] h-[113px] bg-[#EFF2F4] flex items-center justify-center">
                        <div className="w-[90%]">
                            <img src="/manubar component pictures/Avatar.svg" alt="" />
                            <div className="flex text-[#1C1C1C] justify-between w-[54%]">
                                <div>Sign in</div> | <div>Register</div>
                            </div>
                        </div>
                    </div>
                    
                        <div className="w-[100%] h-[25%] flex items-center justify-evenly flex-col">
                            <div className="w-[80%]">
                                <div className="flex w-[40%] justify-between">
                                    <img src="/manubar component pictures/house.svg" alt="" />
                                    <div>Home</div>
                                </div>
                            </div>
                            <div className="w-[80%]">
                                <div className="flex w-[55%] justify-between">
                                    <img src="/manubar component pictures/hamburger.svg" alt="" />
                                    <div>Categories</div>
                                </div>
                            </div>
                            <div className="w-[80%]">
                                <div className="flex w-[50%] justify-between">
                                    <img src="/manubar component pictures/heart.svg" alt="" />
                                    <div>Favorites</div>
                                </div>
                            </div>
                            <div className="w-[80%]">
                                <div className="flex w-[55%] justify-between">
                                    <img src="/manubar component pictures/archieve.svg" alt="" />
                                    <div>My Orders</div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="w-[100%] h-[25%] flex items-center justify-evenly flex-col">
                            <div className="w-[80%]">
                                <div className="flex w-[65%] justify-between">
                                    <img src="/manubar component pictures/WWW.svg" alt="" />
                                    <div>English | USD</div>
                                </div>
                            </div>
                            <div className="w-[80%]">
                                <div className="flex w-[56%] justify-between">
                                    <img src="/manubar component pictures/headphones.svg" alt="" />
                                    <div>Contact us</div>
                                </div>
                            </div>
                            <div className="w-[80%]">
                                <div className="flex w-[40%] justify-between">
                                    <img src="/manubar component pictures/building.svg" alt="" />
                                    <div>About</div>
                                </div>
                            </div>
                        </div>

                        <hr />


                        <div className="w-[100%] flex h-[20%] items-center flex-col justify-evenly">
                            <div className="w-[50%] ">
                                User agreement
                            </div>
                            <div className="w-[50%] ">
                                Partnership
                            </div>
                            <div className="w-[50%] ">
                                Privacy policy
                            </div>

                        </div>


                </motion.div>
            </div>
        </>
    )
}
export default Sidebar
