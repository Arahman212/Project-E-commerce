import React from "react";
import { useMediaQuery } from "react-responsive";

const CardSale=({src,title,discount})=>{
    const is900px=useMediaQuery({minWidth:900})
    return(
        <>
        <div className={`${is900px?"w-[15vw] h-[28vh]":"w-[140px] h-[180px]"} border-[1px] flex flex-col items-center justify-center border-[#DEE2E7] hover:scale-110 hover:border-none transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer`}>
          <div className={`h-[98px] w-[98px] flex items-center justify-center`}>
            <img src={src} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#1C1C1C] text-[13px]">{title}</div>
            <div className="bg-[#FFE3E3] font-medium text-[14px] text-[red] w-[61px] h-[28px] flex items-center justify-center rounded-[29px]">
              {discount}
            </div>
          </div>
        </div>
        </>
    )
}

export default CardSale