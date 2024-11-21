"use client";

import React, { useContext } from "react";
import { toggleContext } from "@/app/context/toggleContextProvider";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
const Navbar = () => {
    const { toggleSideBar, setToggleSideBar } = useContext(toggleContext)

    const handleToggle = () => {
        setToggleSideBar(!toggleSideBar)
    }

    const is550px = useMediaQuery({ maxWidth: 550 })
    const is700px = useMediaQuery({ minWidth: 700 })
    const is800px = useMediaQuery({ minWidth: 800 })
    const is950px = useMediaQuery({ minWidth: 950 })
    return (
        <>
            <div className="w-[100vw] h-[56px] flex justify-center items-center">
                <div className="w-[90vw] flex items-center justify-between">
                    <div className="flex items-center justify-between w-[150px]">

                        {
                            is800px ? "" :
                                <div className="h-[24px] w-[24px] flex items-center justify-center" onClick={handleToggle}>
                                    <img src="/navbar component pictures/hamburger.svg" alt="" />
                                </div>
                        }
                        <div className="flex items-center justify-between w-[108px] transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer group">
                            <div className="bg-[#0D6EFD] h-[31.44px] w-[29.59px] rounded-[2px] flex items-center justify-center shadow-shopping-bag">
                                <img src="/navbar component pictures/shoping bag.svg" alt="" />
                            </div>
                            <div className="text-[#8CB7F5] font-bold text-[1.6rem] group-hover:text-[#aac7ef]">Brand</div>
                        </div>
                    </div>
                    <div className="flex">
                        {
                            is550px ? "" : <div className={` flex items-center justify-center`}>
                                <div className={` ${is550px ? " w-[90vw]" : ""} ${is800px ? "flex" : ""} relative z-0`}>
                                    <input type="text" placeholder="Search" className={`border-[1.5px] ${is800px ? "w-[30vw]" : is700px ? "" : is550px ? "" : "w-[90%]"} h-[40px] rounded-l-[6px] border-[#DEE2E7]  px-10 focus:outline-none focus:border-[1px] focus:border-[#0D6EFD]`} />
                                    {
                                        is800px ? <select className="focus:outline-none focus:border-[1.5px] border-[1.5px] border-l-transparent focus:border-[#0D6EFD] rounded-r-[6px] w-[120px] flex-shrink-0">
                                            <option disabled selected >All category</option>
                                            <option>Automobiles</option>
                                            <option>Clothes and wear</option>
                                            <option>Home interiors</option>

                                        </select> : ""
                                    }
                                    <img src="/navbar component pictures/search.svg" alt="" className="absolute top-3 left-3 " />
                                    <button className={`${is800px ? "w-[90px]" : is700px ? " w-[60px] h-[40px] top-[-1px] right-[-65px]" : is550px ? "w-[100px] h-[40px]" : "rounded-[6px] w-[60px] h-[30px] right-[2rem] absolute top-1"} bg-gradient-to-b from-[#127FFF] to-[#0067FF]  text-white rounded-r-[6px] `}>Search</button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={`${is950px ? "gap-3" : "justify-between w-[65px]"} flex items-center `}>
                        {
                            is950px ? <div className="flex gap-3">
                                <div className="h-[40px] flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out group">
                                    <img src="/navbar component pictures/profile 950px.svg" alt="" />
                                    <div className="text-[#8B96A5] text-[12px] group-hover:text-[#a6b1c0]">Profile</div>
                                </div>
                                <div className="h-[40px] flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out group">
                                    <img src="/navbar component pictures/msg.svg" alt="" />
                                    <div className="text-[#8B96A5] text-[12px] group-hover:text-[#a6b1c0]">Message</div>
                                </div>
                                <div className="h-[40px] flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out group">
                                    <img src="/navbar component pictures/heart.svg" alt="" />
                                    <div className="text-[#8B96A5] text-[12px] group-hover:text-[#a6b1c0]">Orders</div>
                                </div>
                                <div className="h-[40px] flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out group">
                                    <img src="/navbar component pictures/shopping 950px.svg" alt="" />
                                    <div className="text-[#8B96A5] text-[12px] group-hover:text-[#a6b1c0]">Cart</div>
                                </div>

                            </div>
                                :
                                <>
                                    <div className="h-[24px] w-[24px]">
                                        <img src="/navbar component pictures/shopping cart.svg" alt="" />
                                    </div>
                                    <div className="h-[18px] w-[24px]">
                                        <img src="/navbar component pictures/profile.svg" alt="" />
                                    </div>
                                </>

                        }
                    </div>
                </div>
            </div>

            {is550px ?
                <div className="w-[100vw] h-[40px] flex items-center justify-center">
                    <div className=" w-[90vw]  relative z-0">
                        <input type="text" placeholder="Search" className="border-[1.5px] w-[100%] h-[40px] rounded-[6px] border-[#DEE2E7]  px-10 focus:outline-none focus:border-[3px] focus:border-[#0D6EFD]" />
                        <img src="/navbar component pictures/search.svg" alt="" className="absolute top-3 left-3 " />
                    </div>
                </div> : ""
            }
            <div className="w-[100vw] h-[65px]  flex items-center justify-center">
                {
                    is800px ? <>
                        <div className="flex w-[90vw] justify-between">

                            <ul className="flex gap-3 ">
                                <li className="flex gap-2 cursor-pointer ">
                                    <img src="/navbar component pictures/hamburger.svg" alt="" className="w-[18px] h-[24px]" />
                                    <Link href="#" className="font-medium">All Category</Link>
                                </li>
                                <li className="font-medium cursor-pointer">
                                    <Link href="#">Hot Offer</Link>
                                </li>
                                <li className="font-medium cursor-pointer">
                                    <Link href="#" >Gift Offer</Link>
                                </li>
                                <li className="font-medium cursor-pointer">
                                    <Link href="#">projects</Link>
                                </li>
                                <li className="font-medium cursor-pointer">
                                    <Link href="#">Menu item</Link>
                                </li>
                                <li className="font-medium cursor-pointer">
                                    <select name="" id="" className="focus:outline-none focus:border-[1.5px] focus:border-[#0D6EFD] rounded-sm flex-shrink-0">
                                        <option value="">Help</option>
                                        <option value="">FAQ</option>
                                        <option value="">Contact</option>
                                    </select>
                                </li>
                            </ul>
                            <div className="flex gap-3">
                                <select name="" id="" className="focus:outline-none focus:border-[1.5px] focus:border-[#0D6EFD] rounded-[3px] px-1 flex-shrink-0">
                                    <option value="" >English,USD</option>
                                    <option value="" >Spanish,EUR</option>
                                    <option value="" >French,GBP</option>
                                </select>

                                {
                                    is950px ?
                                        <select name="" id="" className="focus:outline-none focus:border-[1.5px] focus:border-[#0D6EFD] rounded-[3px] px-1 flex-shrink-0">
                                            <option value="" disabled selected>
                                                Ship to
                                            </option>
                                            <option value="">
                                                China
                                            </option>
                                            <option value="">UAE</option>
                                            <option value="US">US</option>
                                            <option value="">Germany</option>
                                        </select> : ""
                                }
                            </div>
                        </div>

                    </> :
                        <div className="w-[100vw] h-[36px] flex justify-evenly">
                            <div className="bg-[#EFF2F4] text-[#0D6EFD] flex items-center justify-center w-[85.85px] h-[36px] rounded-[6px] text-[0.99rem]">
                                All category
                            </div>
                            <div className="bg-[#EFF2F4] text-[#0D6EFD] flex items-center justify-center w-[80.85px] h-[36px] rounded-[6px]">
                                Gadgets
                            </div>
                            <div className="bg-[#EFF2F4] text-[#0D6EFD] flex items-center justify-center w-[80.85px] h-[36px] rounded-[6px]">
                                Clothes
                            </div>
                            <div className="bg-[#EFF2F4] text-[#0D6EFD] flex items-center justify-center w-[80.85px] h-[36px] rounded-[6px]">
                                Accessory
                            </div>
                            {
                                is550px ?"" : <div className="bg-[#EFF2F4] text-[#0D6EFD] flex items-center justify-center w-[80.85px] h-[36px] rounded-[6px]">
                                Phone
                            </div> 
                            }

                        </div>
                }
            </div>
        </>
    )
}
export default Navbar