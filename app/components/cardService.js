import React from "react";
import { useMediaQuery } from "react-responsive";
const CardService = ({ mainSrc, title, svgSrc }) => {
    const is600px=useMediaQuery({minWidth:600})
    const is900px=useMediaQuery({minWidth:900})
    
    return (
        <>
            <div className={` ${is900px?"w-[22vw]":is600px?"w-[45vw]":"w-[100vw]"} flex items-center justify-center hover:scale-110 hover:border-none transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer`}>
                <div className={` ${is900px?"w-[20vw]":is600px?"w-[40vw]":"w-[80vw]"} relative`}>
                    <div className="bg-black">
                        <img src={mainSrc} alt="" className=" object-cover" />
                    </div>
                    <div className="bg-[#D1E7FF] h-[55px] w-[55px] rounded-[2rem] border-2 border-white absolute right-5 bottom-[3.5rem] flex items-center justify-center">
                        <img src={svgSrc} alt="" className="h-[18px] w-[18px]" />
                    </div>
                    <div className={` ${is900px?"w-[20vw]":is600px?"w-[40vw]":"w-[80vw]"} h-[80px] flex items-center justify-center border-2 border-[#E0E0E0] border-t-transparent `}>
                        <div className={` ${is900px?"w-[17vw]":is600px?"w-[35vw]":"w-[70vw]"} `}>
                            <div className={`${is900px?"w-[14vw]":is600px?"w-[24vw]":""}  h-[60px] text-[#1C1C1C] font-medium`}>
                                {title}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardService