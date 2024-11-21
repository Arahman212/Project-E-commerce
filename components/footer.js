"use client";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
    const is400px = useMediaQuery({ minWidth: 400 })
    const is500px=useMediaQuery({minWidth:500})
    const is900px=useMediaQuery({minWidth:900})
    const is1000px=useMediaQuery({minWidth:1000})
    return (
        <>
            <div className="w-[100vw] bg-[#EFF2F4] h-[32.48vh] flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">

                    <div className="flex flex-col items-center justify-center">
                        <div className="font-semibold text-[20px] text-[#1C1C1C]">
                            Subscribe on our newsletter
                        </div>
                        <div className="text-[#606060] text-center">
                            Get daily news on upcoming offers from many suppliers  all over the world
                        </div>
                    </div>
                    <div className="relative flex gap-3">
                        <input type="text" className="rounded-[6px] border-[0.5px] border-[#606060] px-9 h-[40px] w-[240px] focus:outline-none focus:border-[1px] focus:border-[#0D6EFD]" placeholder="Email" />
                        <img src="/footer/email.png" className="absolute top-3 left-2" />
                        <button className="bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-white px-3 py-2 rounded-[6px]">Subscribe</button>
                    </div>
                </div>

            </div>


            <div className="w-[100vw] flex items-center justify-center">
                <div className={`w-[90vw]  flex   ${is900px?"justify-between items-center h-[50vh]":"flex-col h-[130vh]"}   justify-center gap-5`}>
                    <div className={`flex flex-col gap-3 ${is900px?"w-[260px]":is500px?"items-center":""}`}>

                        <div className="flex items-center gap-2">
                            <div className="bg-[#0D6EFD] h-[40px] w-[40px] rounded-[2px] flex items-center justify-center shadow-shopping-bag">
                                <img src="/navbar component pictures/shoping bag.svg" alt="" className="w-[17px] h-[21px]" />
                            </div>
                            <div className="text-[#8CB7F5] font-bold text-[1.6rem]">Brand</div>
                        </div>
                        <div className="w-[280px]">
                            Best information about the company gies here but now lorem ipsum is
                        </div>
                        <div className="flex w-[180px] justify-between">
                            <Link href="#">
                                <img src="/footer/facebook.png" alt="" />
                            </Link>
                            <Link href="#">
                                <img src="/footer/twitter.png" alt="" />
                            </Link>
                            <Link href="#">
                                <img src="/footer/linkedin.png" alt="" />
                            </Link>
                            <Link href="#">
                                <img src="/footer/instagram.png" alt="" />
                            </Link>
                            <Link href="#">
                                <img src="/footer/youtube.png" alt="" />
                            </Link>

                        </div>
                    </div>
                    <div className={`flex gap-5 ${is900px?"":"flex-col"}`}>
                        <div className={`flex  ${is900px?"":is500px?"":"flex-col"} gap-4`}>
                            <div className={`flex flex-col gap-5 ${ is1000px?"w-[12vw]":is900px?"":is500px?"w-[40vw] items-center":""}`}>
                                <div className="text-[#1C1C1C] font-medium">
                                    About &nbsp; &nbsp; &nbsp;
                                </div>
                                <div className={` gap-2 text-[#8B96A5] ${is500px?"flex flex-col":"flex"}`}>
                                    <Link href="#">About Us</Link>
                                    <Link href="#">Find Store</Link>
                                    <Link href="#">Categories</Link>
                                    <Link href="#">Blogs</Link>
                                </div>
                            </div>
                            <div className={`flex flex-col gap-4 ${is1000px?"w-[12vw]":is900px?"":is500px?"w-[40vw] items-center":""}`}>
                                <div className="text-[#1C1C1C] font-medium">
                                    Patnership
                                </div>
                                <div className={`flex gap-2 text-[#8B96A5] ${is500px?"flex flex-col":is400px?"flex":""}`}>
                                    <Link href="#">About Us</Link>
                                    <Link href="#">Find Store</Link>
                                    <Link href="#">Categories</Link>
                                    <Link href="#">Blogs</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`flex  ${is500px?"":"flex-col"} gap-4`}>
                            <div className={`flex flex-col gap-5 ${is1000px?"w-[12vw]":is900px?"":is500px?"w-[40vw] items-center":""}`}>
                                <div className="text-[#1C1C1C] font-medium">
                                    Information &nbsp; &nbsp;
                                </div>
                                <div className={` gap-3 text-[#8B96A5] ${is500px?"flex flex-col":is400px ? "flex" : ""}`}>
                                    <div className={`flex gap-2 ${is500px?"flex flex-col":is400px ? "flex" : ""}`}>
                                        <Link href="#">Help center</Link>
                                        <Link href="#">Money Refund</Link>
                                    </div>
                                    <div className={`flex gap-2 ${is500px?"flex flex-col":is400px ? "flex" : ""}`}>
                                        <Link href="#">Shipping</Link>
                                        <Link href="#">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex flex-col gap-5 ${is1000px?"w-[12vw]":is900px?"":is500px?"w-[40vw] items-center":""}`}>
                                <div className="text-[#1C1C1C] font-medium">
                                    For Users &nbsp;
                                </div>
                                <div className={`flex gap-2 text-[#8B96A5] ${is500px?"flex flex-col":is400px?"flex":""}`}>
                                    <Link href="#">Login</Link>
                                    <Link href="#">Register</Link>
                                    <Link href="#">Settings</Link>
                                    <Link href="#">My Orders</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-3 ${is500px?"items-center":""}`}>
                        <div className="text-[#1C1C1C] font-medium">
                            Get App
                        </div>
                        <Link href="#" >
                            <div className="bg-black w-[124px] h-[42px] rounded-[6px] flex items-center justify-center">
                                <img src="/footer/applestore.svg" alt="" />
                            </div>
                        </Link>
                        <Link href="#" >
                            <div className="bg-black w-[124px] h-[42px] rounded-[6px] flex items-center justify-center">
                                <img src="/footer/playstore.svg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer