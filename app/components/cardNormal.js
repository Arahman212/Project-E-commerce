import React from "react";

const CardNormal = ({ src,title,price }) => {
    return (
        <>
            <div className="w-[140px] h-[180px] border-[1px] flex flex-col items-center justify-center border-[#DEE2E7] hover:scale-110 hover:border-none transition-all duration-300 ease-in-out">
                <div className="h-[98px] w-[98px] flex items-center justify-center">
                    <img src={src} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="text-[#1C1C1C] text-[13px]">{title}</div>
                    <div className="text-[#8B96A5]  text-[13px]  w-[81px] h-[28px] flex items-center justify-center rounded-[29px]">
                        {price}
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardNormal