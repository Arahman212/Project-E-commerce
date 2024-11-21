import React from "react";
import { useMediaQuery } from "react-responsive";
const CardRecommended = ({ src, price, description }) => {
    const is900px = useMediaQuery({ minWidth: 900 })
    const is500px = useMediaQuery({ minWidth: 500 })

    return (
        <>
            <div className={`${is900px ? "w-[16.5vw]" : ""} border-[1px] border-[#DEE2E7] h-[240.98px] flex flex-col justify-evenly items-center hover:scale-110 hover:border-none transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer`}>
                <div className={` ${is900px ? "w-[12vw]" : "w-[40.93vw]"} h-[143.23px] flex items-center justify-center`}>
                    <img src={src} alt="" className={`${is500px ? "w-[35.71vw] h-[22.85vh]" : "w-[125px] h-[129px]"} `} />
                </div>
                <div className="w-[80%]">
                    <div className="text-[#1C1C1C] text-[16px] font-medium">{price}</div>
                    <div className="text-[#8B96A5] text-[13px]">{description}</div>
                </div>
            </div>
        </>
    )
}
export default CardRecommended 