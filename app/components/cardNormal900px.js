import React from "react";
const CardNormal900px = ({src,tital,price}) => {
    return (
        <>
            <div className="w-[17.7vw] h-[19.5vh]  border-[1px] flex hover:scale-110 hover:border-none transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer ">
                <div className="w-[50%] flex items-center justify-center">
                    <div className="w-[70%] h-[65%] flex flex-col gap-2">
                        <div className="text-[#1C1C1C] font-medium">{tital}</div>
                        <div className="text-[#8B96A5] text-[13px] w-[50px]">{price}</div>
                    </div>
                </div>
                <div className="h-[100%] w-[50%] flex items-end justify-end">
                    <img src={src} alt="" className="h-[90px] w-[90px]" />
                </div>
            </div>
        </>
    )
}
export default CardNormal900px