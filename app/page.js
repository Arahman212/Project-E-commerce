"use client";



import CardRecommended from "./components/cardRecommended";
import CardNormal from "./components/cardNormal";
import CardSale from "./components/cardSale";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import CardService from "./components/cardService";
import Head from "next/head";
import CardNormal900px from "./components/cardNormal900px";

export default function Home() {
  const is768px = useMediaQuery({ minWidth: 768 })
  const is600px = useMediaQuery({ minWidth: 600 })
  const is900px = useMediaQuery({ minWidth: 900 })
  const is830px = useMediaQuery({ minWidth: 830 })
  const is950px = useMediaQuery({ minWidth: 900 })

  const [sec, setSec] = useState(59)
  const [min, setMin] = useState(34)
  const [hour, setHour] = useState(13)

  useEffect(() => {
    const timeSec = setInterval(() => {
      setSec(prev => {
        if (prev > 0) {
          return prev - 1;
        } else {

          return prev + 59;
        }
      })
    }, 1000)
    return () => { clearInterval(timeSec) }
  }, [])


  useEffect(() => {
    const timeMin = setInterval(() => {
      setSec(prev => {
        if (prev > 0) {
          return prev - 1;
        } else {

          return prev + 59;
        }
      })
    }, 60000)
    return () => { clearInterval(timeMin) }
  }, [])


  useEffect(() => {
    const timeHour = setInterval(() => {
      setSec(prev => {
        if (prev > 0) {
          return prev - 1;
        } else {

          return prev + 23;
        }
      })
    }, 3600000)
    return () => { clearInterval(timeHour) }
  }, [])


  useEffect(() => {

    const timeMin = setInterval(() => {
      setMin(prev => {
        if (prev > 0) {
          return prev - 1;
        }
        else {
          return prev + 59;
        }
      })
    }, 60000)
    return () => { clearInterval(timeMin) }
  }, [])




  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initail-scale=1.0" />
      </Head>
      <div className={`${is600px ? "w-[100vw] flex justify-center items-center " : ""}`}>

        <div className={`${ is900px?"w-[90vw] flex gap-5 items-center ":is600px ? "w-[90vw] flex justify-around items-center" : ""}`}>

          {
            is600px ? <div className={`${is900px ? "w-[18.36vw]" : "w-[25vw]"} `}  >
              <div className="text-[#505050] hover:bg-[#E5F1FF] hover:text-black px-3 py-1 rounded-[6px] cursor-pointer transition-all duration-300 ease-in-out">
                Automobiles
              </div>
              <div className="text-[#505050] hover:bg-[#E5F1FF] hover:text-black px-3 py-1 rounded-[6px] cursor-pointer transition-all duration-300 ease-in-out">
                Clothes and wear
              </div>
              <div className="text-[#505050] hover:bg-[#E5F1FF] hover:text-black px-3 py-1 rounded-[6px] cursor-pointer transition-all duration-300 ease-in-out">
                Home interiors
              </div>
              <div className="text-[#505050] hover:bg-[#E5F1FF] hover:text-black px-3 py-1 rounded-[6px] cursor-pointer transition-all duration-300 ease-in-out">
                Computer
              </div>
              <div className="text-[#505050] hover:bg-[#E5F1FF] hover:text-black px-3 py-1 rounded-[6px] cursor-pointer transition-all duration-300 ease-in-out">
                Equipments
              </div>
              <div className="text-[#505050] hover:bg-[#E5F1FF] hover:text-black px-3 py-1 rounded-[6px] cursor-pointer transition-all duration-300 ease-in-out">
                Sports
              </div>
              <div className="text-[#505050] hover:bg-[#E5F1FF] hover:text-black px-3 py-1 rounded-[6px] cursor-pointer transition-all duration-300 ease-in-out">
                Animals and pets
              </div>
              <div className="text-[#505050] hover:bg-[#E5F1FF] hover:text-black px-3 py-1 rounded-[6px] cursor-pointer transition-all duration-300 ease-in-out">
                Machinery tools
              </div>
              <div className="text-[#505050] hover:bg-[#E5F1FF] hover:text-black px-3 py-1 rounded-[6px] cursor-pointer transition-all duration-300 ease-in-out">
                More Category
              </div>
            </div> : ""
          }


          <div className={`bg-custom-banner bg-no-repeat bg-cover ${is900px ? "w-[50.18vw] h-[50vh]" : is600px ? "w-[60vw] h-[50vh]" : "w-[100vw] h-[27.69vh]"}  flex justify-center items-center `}>
            <div className={`flex flex-col justify-evenly ${is600px ? "h-[40%]" : "h-[70%]"} w-[90%]`}>
              <div>
                <div className="text-[18px] text-[#1C1C1C]">
                  Latest trending
                </div>
                <div className="font-semibold text-[18px] text-[#1C1C1C]">
                  Electronic items
                </div>
              </div>
              <div className={`${is600px ? "text-[black]" : "text-[#0D6EFD]"} bg-white w-[91px] h-[30px] flex justify-center items-center rounded-[6px] cursor-pointer hover:bg-[#e7f3ff] transition-all duration-300 ease-in-out`}>
                Learn more
              </div>
            </div>
          </div>
          {
            is900px ?
              <div className="flex flex-col gap-2">
              <div className="w-[200px] ">
                <div className={`bg-[#E3F0FF] h-[22vh] flex flex-col items-center justify-center gap-1 rounded-[6px]`}>
                  <div className="flex w-[90%] items-center">
                    <div>
                      <img src="/2nd section/Avatar Eva.svg" alt="" className="h-[55px] w-[55px]" />
                    </div>
                    <div>
                      Hi,User <br/>let's get started
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <button className="bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-white w-[180px] h-[25px] rounded-[4px]  transition-all duration-300 ease-in-out">Join Now</button>
                    <button className="bg-white text-[#127FFF] border-[1px] w-[180px] h-[25px] rounded-[4px] hover:bg-[#0067FF] hover:text-[white] transition-all duration-300 ease-in-out">Log in</button>
                  </div>
                </div>
              </div>
              <div className="bg-[#F38332] hover:bg-[#d16a21] cursor-pointer text-white rounded-[6px] w-[200px] h-[12.5vh] flex items-center justify-center ">
                <div className="w-[80%]">
                Get US $10 off with a new supplier
                </div>
              </div>
              <div className="bg-[#55BDC3] hover:bg-[#37a7ad] cursor-pointer text-white rounded-[6px] w-[200px] h-[12.5vh] flex items-center justify-center">
                <div className="w-[80%]">
                Send quotes with supplier preference
                </div>
              </div>
              </div>
              : ""
          }
        </div>
      </div>



      {
        is900px ? "" :
          <div className="flex w-[100vw] h-[100px] items-center justify-center">
            <div className="flex w-[90vw] justify-between">
              <div>
                <div className="text-[18px] font-semibold">
                  Deals and offers
                </div>
                <div className="text-[13px]">
                  Electronic equipments
                </div>
              </div>
              <div>
                <div className="flex w-[143px] justify-between">
                  <div className="w-[45px] h-[44px] bg-[#EFF2F4] text-[#8B96A5] font-bold flex flex-col justify-center items-center">
                    13 <div className="text-[11px] font-normal">Hour</div>
                  </div>
                  <div className="w-[45px] h-[44px] bg-[#EFF2F4] text-[#8B96A5] font-bold flex flex-col justify-center items-center">
                    {min} <div className="text-[11px] font-normal">Min</div>
                  </div>
                  <div className="w-[45px] h-[44px] bg-[#EFF2F4] text-[#8B96A5] font-bold flex flex-col justify-center items-center">
                    {sec} <div className="text-[11px] font-normal">Sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }


      <div className="w-[100vw] h-[40vh] flex  justify-center items-center">
        <div className={`w-[90vw] flex ${is900px ? "" : "gap-3"} justify-center`}>
          {
            is950px ?
              <div className="flex items-center justify-center border-[1px] w-[20vw]">
                <div className="flex flex-col gap-5 h-[90%] w-[90%] ">

                  <div>
                    <div className="text-[18px] font-semibold">
                      Deals and offers
                    </div>
                    <div className="text-[13px]">
                      Electronic equipments
                    </div>
                  </div>
                  <div>
                    <div className="flex w-[143px] justify-between">
                      <div className="w-[45px] h-[44px] bg-[#606060] text-[white] font-bold flex flex-col justify-center items-center rounded-[4px]">
                        13 <div className="text-[11px] font-normal">Hour</div>
                      </div>
                      <div className="w-[45px] h-[44px] bg-[#606060] text-[white] font-bold flex flex-col justify-center items-center rounded-[4px]">
                        {min} <div className="text-[11px] font-normal ">Min</div>
                      </div>
                      <div className="w-[45px] h-[44px] bg-[#606060] text-[white] font-bold flex flex-col justify-center items-center rounded-[4px]">
                        {sec} <div className="text-[11px] font-normal">Sec</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              : ""
          }
          <CardSale src="/3rd section/cloth.svg" title={"Blue Coat"} discount={"-25%"}/>
          <CardSale src="/3rd section/headphone.svg" title={"HeadPhone"} discount={"-15%"}/>
          <CardSale src="/3rd section/laptop.svg" title={"Laptop"} discount={"-40%"} />

          {
            is600px ?
              <CardSale src="/3rd section/camera.svg" title={"Camera"} discount={"-25%"} />
              : ""
          }
          {
            is768px ?
              <CardSale src="/3rd section/headset.svg" title={"HeadPhone"} discount={"-25%"} />
              : ""
          }

        </div>
      </div>

      {is900px ? "" :
        <div className="flex w-[100vw] h-[100px] items-center justify-center">
          <div className="flex w-[90vw] justify-between">
            <div>
              <div className="text-[18px] font-semibold">
                Home and outdoor
              </div>

            </div>

          </div>
        </div>
      }


      <div className="w-[100vw] flex  justify-center items-center h-[45vh]">
        <div className={`w-[90vw] flex ${is900px ? "" : "gap-3"} justify-center`}>
          {
            is900px ? <div className="border-[1px] rounded-l-[6px] w-[20vw] bg-custom-4thsection-picture bg-cover flex justify-center items-center">
              <div className="flex flex-col gap-4 h-[90%] w-[90%]">

                <div className="text-[#1C1C1C] font-semibold text-[20px] w-[175px]">
                  Home and Outdoor
                </div>
                <button className="bg-[white] rounded-[6px] h-[40px] w-[123px] flex items-center justify-center font-medium">
                  Source Now
                </button>
              </div>
            </div> : ""
          }

          {
            is900px ?
              <div className="">
                <div className="flex">

                  <CardNormal900px src={"/4th section/sofa soft.svg"} tital={"Soft Chair"} price={"From USD 19"} />
                  <CardNormal900px src={"/4th section/lamp.svg"} tital={"Lamp"} price={"From USD 19"} />
                  <CardNormal900px src={"/4th section/kitchen dishes.svg"} tital={"Dishes"} price={"From USD 19"} />
                  <CardNormal900px src={"/7th section/container.svg"} tital={"Container"} price={"From USD 19"} />
                </div>
                <div className="flex">

                  <CardNormal900px src={"/4th section/Mixer.svg"} tital={"Mixer"} price={"From USD 100"} />
                  <CardNormal900px src={"/4th section/blender.svg"} tital={"Soft Chair"} price={"From USD 39"} />
                  <CardNormal900px src={"/4th section/chair.svg"} tital={"Chair"} price={"From USD 19"} />
                  <CardNormal900px src={"/4th section/plant.svg"} tital={"Soft Chair"} price={"From USD 10"} />
                </div>
              </div>
              :
              <>
                <CardNormal src="/4th section/chair.svg" price={"From USD 19"} title={"Soft Chair"} />
                <CardNormal src="/4th section/sofa.svg" price={"From USD 19"} title={"Soft Chair"} />
                <CardNormal src="/4th section/sofa soft.svg" price={"From USD 19"} title={"Soft Chair"} />

                {
                  is600px ?
                    <CardNormal src="/4th section/lamp.svg" price={"From USD 10"} title={"Lamp"} />
                    : ""
                }
                {
                  is768px ?
                    <CardNormal src="/4th section/blender.svg" price={"From USD 100"} title={"Blender"} />
                    : ""
                }
              </>

          }
        </div>
      </div>


      {is900px ? "" :
        <>
          <div className="w-[100vw] flex justify-center">
            <div className="w-[90vw] h-[40px] text-[#0D6EFD] text-[1.1rem] flex items-center ">
              <div className="w-[108.5px] flex justify-between items-center">
                Source now <img src="/4th section/arrow.svg" alt="" className="h-[15px] w-[15px] pt-1 font-bold" />
              </div>
            </div>
          </div>
          <div className="flex w-[100vw] h-[100px] items-center justify-center">
            <div className="flex w-[90vw] justify-between">
              <div>
                <div className="text-[18px] font-semibold">
                  Consumer electronic
                </div>

              </div>

            </div>
          </div>
        </>
      }




      <div className="w-[100vw] flex  justify-center items-center h-[45vh]">
        <div className={`w-[90vw] flex ${is900px ? "" : "gap-3"} justify-center`}>
          {
            is900px ? <div className="border-[1px] rounded-l-[6px] w-[20vw] bg-custom-5thsection-picture bg-cover flex justify-center items-center">
              <div className="flex flex-col gap-3 h-[90%] w-[90%]">

                <div className="text-[#1C1C1C] font-semibold text-[20px] w-[175px]">
                  Consumer electronics and gadgets
                </div>
                <button className="bg-[white] rounded-[6px] h-[40px] w-[123px] flex items-center justify-center font-medium">
                  Source Now
                </button>
              </div>
            </div> : ""
          }

          {
            is900px ?
              <div className="">
                <div className="flex">

                  <CardNormal900px src={"/5th section/watch.svg"} tital={"Watch"} price={"From USD 19"} />
                  <CardNormal900px src={"/3rd section/camera.svg"} tital={"Camera"} price={"From USD 89"} />
                  <CardNormal900px src={"/3rd section/headphone.svg"} tital={"HeadPhone"} price={"From USD 10"} />
                  <CardNormal900px src={"/5th section/jag.svg"} tital={"Jag"} price={"From USD 90"} />
                </div>
                <div className="flex">

                  <CardNormal900px src={"/3rd section/headset.svg"} tital={"HeadSet"} price={"From USD 35"} />
                  <CardNormal900px src={"/3rd section/laptop.svg"} tital={"Laptop"} price={"From USD 340"} />
                  <CardNormal900px src={"/5th section/iphone.svg"} tital={"Phone"} price={"From USD 19"} />
                  <CardNormal900px src={"/5th section/red phone.svg"} tital={"Iphone"} price={"From USD 240"} />
                </div>
              </div>
              :
              <>
                <CardNormal src="/5th section/iphone.svg" price={"USD 1000"} title={"IPhone"} />
                <CardNormal src="/5th section/infinix mobile.svg" price={"USD 800"} title={"Samsung"} />
                <CardNormal src="/5th section/redmi mobile.svg" price={"USD 500"} title={"black Phone"} />
                {
                  is600px ?
                    <CardNormal src="/5th section/red phone.svg" price={"USD 950"} title={"IPhone Red"} />
                    : ""
                }
                {
                  is768px ?
                    <CardNormal src="/5th section/watch.svg" price={"USD 950"} title={"Watch"} />
                    : ""
                }
              </>

          }
        </div>
      </div>









      {is900px ? "" :
        <div className="w-[100vw] flex justify-center">
          <div className="w-[90vw] h-[60px] text-[#0D6EFD] text-[1.1rem] flex items-center ">
            <div className="w-[108.5px] flex justify-between items-center">
              Source now <img src="/4th section/arrow.svg" alt="" className="h-[15px] w-[15px] pt-1 font-bold" />
            </div>
          </div>
        </div>
      }




      <div className={`bg-custom-Ad w-[100vw]  ${is768px ? "h-[64.79vh]" : "h-[23.85vh]"} `}>
        <div className={`w-[100vw] ${is768px ? "h-[64.79vh]" : "h-[23.85vh]"} bg-gradient-to-r from-[#2C7CF1] to-[#00D1FF]/50 flex justify-center items-center `}>
          <div className={`flex flex-col  ${is768px ? "w-[45%] h-[86%] justify-start" : "justify-evenly h-[80%] w-[90%]"} `}>
            <div className={`${is768px ? "text-[32px] font-semibold w-[360px]" : "text-[18px] w-[70%]"} font-semibold text-white `}>
              An easy way to send requests to all suppliers
            </div>

            {
              is768px ? <div className="text-white w-[372px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat excepturi quibusdam?</div> :
                <button className="bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-[white] rounded-[6px] w-[98px] h-[30px] text-[13px] font-medium">
                  Send inquiry
                </button>
            }


          </div>
          {
            is768px ?
              <div className="w-[48.10vw] h-[80%] bg-white rounded-[10px]">
                <div className="w-[100%] h-[20%] flex justify-center">
                  <div className="text-[20px] font-semibold text-[#1C1C1C] w-[90%] flex items-center">
                    Send quote to suppliers
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="w-[100%] flex flex-col items-center gap-3">
                    <input type="text" value="What item you need?" disabled className="w-[90%] h-[40px] px-3 rounded-md focus:outline-none focus:border-[1px] focus:border-[#0D6EFD] border-[1.5px]" />
                    <textarea name="" id="" className="w-[90%] focus:outline-none border-[1.5px] h-[73px] rounded-md px-3 py-2 focus:border-[1px] focus:border-[#0D6EFD]"></textarea>
                    <div className="flex w-[90%] justify-start">
                      <div className="flex flex-col gap-3">
                        <div className="w-[340px] flex justify-between">

                          <input
                            type="number"
                            step="1"
                            min="1"
                            max="1000"
                            className="border border-gray-300 focus:outline-none px-3 rounded-md focus:border-[#0D6EFD] w-[206px] h-[40px]"
                            placeholder="Quantity"
                          />

                          <select name="" id="options" className="w-[111px] h-[40px] px-1 focus:outline-none border-[1.5px] focus:border-[1px] focus:border-[#0D6EFD]  rounded-md">
                            <option value="option1">Pcs</option>
                            <option value="option2">Kg</option>
                            <option value="option3">Box</option>
                          </select>
                        </div>
                        <button className="bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-white w-[128px] h-[40px] rounded-md">Send inquiry</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              : ""
          }
        </div>
      </div>



      <div>
        <div className="h-[60px] w-[100vw] flex items-center justify-center">
          <div className="w-[90vw] font-semibold text-[18px]">
            Recommended items
          </div>
        </div>
        <div className={`${is900px ? "flex flex-col gap-5" : "flex items-center justify-center gap-5"}`}>
          <div className={`${is900px ? "w-[100vw] gap-4 justify-center flex" : "w-[41vw] flex flex-col gap-5"}`}>
            <CardRecommended src="/7th section/shirt.svg" price={"$10.30"} description={"T-shirt with multiple colors, for men"} />
            <CardRecommended src="/7th section/jacket.svg" price={"$10.30"} description={"Jeans shorts for men blue color"} />
            <CardRecommended src="/7th section/wallet.svg" price={"$34.00"} description={"Blue wallet for men leather metarfial"} />
            <CardRecommended src="/7th section/container.svg" price={"$10.30"} description={"Container to drink water for men and women"} />
            <CardRecommended src="/3rd section/laptop.svg" price={"$10.30"} description={"Laptop with multiple specs"} />

          </div>
          <div className={`${is900px ? " w-[100vw] gap-4 justify-center flex" : "w-[41vw] flex flex-col gap-5"} `}>
            <CardRecommended src="/7th section/jar.svg" price={"$80.95"} description={"Jeans bag for travel for men"} />
            <CardRecommended src="/7th section/bag.svg" price={"$99.00"} description={"Jeans bag for travel for men"} />
            <CardRecommended src="/7th section/pants.svg" price={"$9.99"} description={"Jeans shorts for men blue color"} />
            <CardRecommended src="/7th section/coat.svg" price={"$12.50"} description={"Blue Winter Coat medium size"} />
            <CardRecommended src="/3rd section/headphone.svg" price={"$12.50"} description={"HeadPhone with bass boasted for men and women"} />
          </div>
        </div>
      </div>


      <div className="h-[60px] w-[100vw] flex justify-center items-center ">
        <div className="w-[90vw] font-semibold text-[18px]">
          <div className="text">
            Our extra services
          </div>
        </div>

      </div>

      <div className={`${is900px ? "flex justify-center gap-1 " : is768px ? "flex justify-center gap-5" : is600px ? "flex justify-center gap-5" : "flex flex-col gap-10"} `}>
        <div className={`${is900px ? "flex" : is600px ? " flex flex-col gap-10" : " flex flex-col gap-10"} `}>
          <CardService title="Source from industry Hubs" svgSrc="/8th section/search.svg" mainSrc="/8th section/1.png" />
          <CardService title="Customize Your Products" svgSrc="/8th section/archieve.svg" mainSrc="/8th section/2.png" />
        </div>
        <div className={`${is900px ? "flex" : is600px ? " flex flex-col gap-10" : " flex flex-col gap-10"}`}>
          <CardService title="Fast, reliable shipping by ocean or air" svgSrc="/8th section/send.svg" mainSrc="/8th section/3.png" />
          <CardService title="Product monitoring and inspection" svgSrc="/8th section/security.svg" mainSrc="/8th section/4.png" />
        </div>
      </div>


      <div className="h-[60px] w-[100vw] flex justify-center items-center">
        <div className="w-[90vw] font-semibold text-[18px]">
          <div className="text">
            Suppliers by region
          </div>
        </div>
      </div>

      <div className={`w-[100vw] flex justify-center ${is830px ? "h-[20vh]" : "h-[40vh]"} items-center `}>

        <div className={`w-[90vw] ${is830px ? "" : "flex"} gap-2 justify-between`}>
          <div className={`${is830px ? "flex justify-between w-[90vw]" : ""}`}>
            <div className={`flex items-center gap-3 ${is830px ? "w-[150.775px] justify-center" : ""}`}>
              <img src="/9th section/UAE.png" alt="" className="h-[20px]" />
              <div>
                <div className="text-[#1C1C1C]">
                  Arabic Emirates
                </div>
                <div className="text-[#8B96A5] text-[13px]">
                  shopname.ae
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-3 ${is830px ? "w-[150.775px] justify-center" : ""}`}>
              <img src="/9th section/Austrailia.png" alt="" className="h-[20px]" />
              <div>
                <div className="text-[#1C1C1C]">
                  Australia
                </div>
                <div className="text-[#8B96A5] text-[13px]">
                  shopname.ae
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-3 ${is830px ? "w-[150.775px] justify-start" : ""}`}>
              <img src="/9th section/USA.png" alt="" className="h-[20px]" />
              <div>
                <div className="text-[#1C1C1C]">
                  United States
                </div>
                <div className="text-[#8B96A5] text-[13px]">
                  shopname.ae
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-3 ${is830px ? "w-[150.775px] justify-center" : ""}`}>
              <img src="/9th section/russia.png" alt="" className="h-[20px]" />
              <div>
                <div className="text-[#1C1C1C]">
                  Russia
                </div>
                <div className="text-[#8B96A5] text-[13px]">
                  shopname.ae
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-3 ${is830px ? "w-[150.775px] justify-center" : ""}`}>
              <img src="/9th section/itly.png" alt="" className="h-[20px]" />
              <div>
                <div className="text-[#1C1C1C]">
                  Italy
                </div>
                <div className="text-[#8B96A5] text-[13px]">
                  shopname.ae
                </div>
              </div>
            </div>
          </div>
          <div className={`${is830px ? "flex justify-between w-[90vw]" : ""}`}>
            <div className={`flex items-center gap-3 ${is830px ? "w-[150.775px] justify-start" : ""}`}>
              <img src="/9th section/denmark.png" alt="" className="h-[20px]" />
              <div>
                <div className="text-[#1C1C1C]">
                  Denmark
                </div>
                <div className="text-[#8B96A5] text-[13px]">
                  shopname.ae
                </div>
              </div>
            </div>
            <div className={`flex items-center  gap-3 ${is830px ? "w-[150.775px] justify-center" : ""}`}>
              <img src="/9th section/france.png" alt="" className="h-[20px]" />
              <div>
                <div className="text-[#1C1C1C]">
                  France
                </div>
                <div className="text-[#8B96A5] text-[13px]">
                  shopname.ae
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-3 ${is830px ? "w-[150.775px] justify-center" : ""}`}>
              <img src="/9th section/UAE.png" alt="" className="h-[20px]" />
              <div>
                <div className="text-[#1C1C1C]">
                  Arabic Emirates
                </div>
                <div className="text-[#8B96A5] text-[13px]">
                  shopname.ae
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-3 ${is830px ? "w-[150.775px] justify-center" : ""}`}>
              <img src="/9th section/china.png" alt="" className="h-[20px]" />
              <div>
                <div className="text-[#1C1C1C]">
                  China
                </div>
                <div className="text-[#8B96A5] text-[13px]">
                  shopname.ae
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-3 ${is830px ? "w-[150.775px] justify-center" : ""}`}>
              <img src="/9th section/britan.png" alt="" className="h-[20px]" />
              <div>
                <div className="text-[#1C1C1C]">
                  Britain
                </div>
                <div className="text-[#8B96A5] text-[13px]">
                  shopname.ae
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}