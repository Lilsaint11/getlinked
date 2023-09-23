"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const Prizes = () => {
    useEffect(() => {
        AOS.init({
          easing: "ease-in-out",
          duration: 700,
        });
      }, []);
    return ( 
        <div className="flex flex-col justify-center items-center px-10 min-[850px]:px-16  py-10 gap-10  border-b border-slate-500 relative">
             <img src="/images/sata gra.png" alt="" className="absolute top-7 left-12 z-20 w-2 animate-pulse"/>
             <img src="/images/sata gra.png" alt="" className="absolute top-16 right-20 z-20 animate-pulse"/>
            <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute z-10 -top-10 -left-5"/>
            <div className="flex flex-col justify-center items-center relative z-40 w-full min-[850px]:items-end ">
                <div className="flex flex-col max-[850px]:items-center min-[850px]:w-1/2 " data-aos="flip-down">
                    <h1 className="text-[20px]  sm:text-[32px] clashDisplay font-bold max-[850px]:text-center max-w-[200px] w-full">Prizes and 
                   <br/> <span className="text-[#D434FE]"> Rewards</span>
                    </h1>
                    <p  className="text-[12px] sm:text-[16px] max-[850px]:text-center leading-loose min-[850px]:max-w-[400px]">Highlight of the prizes or rewards for winners and for participants.</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-36" data-aos="fade-up" >
                <div className="flex max-sm:flex-col items-center justify-center max-sm:gap-36 sm:gap-5 sm:mt-20">
                    <div className="relative sm:-mt-20">
                        <img src="/images/star2.png" alt="" className="absolute -bottom-8 left-7 z-20 w-2 animate-pulse"/>
                        <Image src="/images/cup.png" width="400" height="400" alt="image" className="relative z-40"/>
                    </div>
                    <div className="flex justify-between items-center w-full gap-5 relative z-40 sm:w-1/2 ">
                        <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute z-10 -bottom-16 -right-20 rotate-180"/>
                        <div className="w-full h-full p-5 border border-[#D434FE] rounded-md flex flex-col justify-center items-center backdrop-opacity-10 bg-[#D434FE]/10 gap-3">
                            <img src="/images/silver_medal 1.png" alt="" className="-mt-12 sm:-mt-20 sm:w-[480px]"/>
                            <div className=" flex flex-col justify-center items-center ">
                                <h1 className="text-center text-[12px] min-[850px]:text-[24px] font-semibold max-w-[50px]">2nd <span className="min-[850px]:text-[16px]">Runner</span></h1>
                                <h1 className="text-[14px] min-[850px]:text-[20px] font-bold text-[#D434FE]">N300,000</h1>
                            </div>
                        </div>
                        <div className="w-full h-full px-5 py-7 border border-[#903AFF] rounded-md flex flex-col justify-center items-center backdrop-opacity-10 bg-[#903AFF]/10 gap-8 relative">
                            <img src="/images/gold_medal 1.png" alt="" className=" scale-150 -mt-20 "/>
                            <div className=" flex flex-col justify-center items-center ">
                                <h1 className="text-center text-[12px] min-[850px]:text-[24px] font-semibold max-w-[50px]">1st <span className="min-[850px]:text-[16px]">Runner</span></h1>
                                <h1 className="text-[14px] min-[850px]:text-[20px] font-bold text-[#D434FE]">N400,000</h1>
                            </div>
                        </div>
                        <div className="w-full h-full p-5 border border-[#D434FE] rounded-md flex flex-col justify-center items-center backdrop-opacity-10 bg-[#D434FE]/10 gap-3 relative z-40">
                            <img src="/images/star2.png" alt="" className="absolute -top-20 right-2 z-20 w-3 animate-pulse"/>
                            <img src="/images/bronze_medal 1.png" alt="" className="-mt-12 sm:-mt-20 sm:w-[480px]"/>
                            <div className=" flex flex-col justify-center items-center ">
                                <h1 className="text-center text-[12px] min-[850px]:text-[24px] font-semibold max-w-[50px]">3rd <span className="min-[850px]:text-[16px]">Runner</span></h1>
                                <h1 className="text-[14px] min-[850px]:text-[20px] font-bold text-[#D434FE]">N150,000</h1>
                            </div>
                        </div>
                        <img src="/images/star-grey2.png" alt="" className="absolute right-24 -bottom-12  z-20 w-2 animate-pulse"/>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-10 relative">
                    <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute z-10 -top-32 -left-20 min-[1000px]:-left-72"/>
                    <div className="flex flex-col justify-center items-center w-full gap-3 relative z-40">
                        <h1 className="clashDisplay text-[20px] sm:text-[32px] font-bold">Partners and Sponsors</h1>
                        <p className="text-[12px] sm:text-[14px] max-w-[447px] font-normal text-center">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                    </div>
                    <div className="flex flex-col justify-center gap-3 items-center border border-[#D434FE] rounded-md w-full h-[150px] sm:h-[360px] p-10 max-[400px]:p-5 max-[340px]:p-2 sm:p-20 sm:px-0 min-[900px]:max-w-[700px] mb-10 relative z-40" data-aos="fade-up">
                            <img src="/images/star pu2.png" alt="" className="absolute left-5 top-0 z-20 animate-pulse"/>
                            <img src="/images/star2.png" alt="" className="absolute -bottom-0 right-8 z-20 w-3 animate-pulse"/>
                            <div className="flex justify-between items-center h-full w-full">
                                <div className="w-full flex justify-center">
                                    <img src="/images/Liberty company logo white colour.png" alt="" className="h-10 max-[350px]:h-8 w-[50px] sm:h-16 sm:w-2/5 max-[350px]:w-[40px]"/>
                                </div>
                                <div className="flex justify-center gap-3 sm:gap-10 items-center w-full">
                                    <span className="flex bg-[#D434FE] w-[2px] h-10"></span>
                                    <img src="/images/Liberty company logo white.png" alt="" className="w-16 sm:w-36 flex justify-center"/>
                                    <span className="flex bg-[#D434FE] w-[2px] h-10"></span>
                                </div>
                                <div className="w-full flex justify-center">
                                    <img src="/images/Winwise logo White colour 1.png" alt="" className="w-[40px] max-[350px]:w-[30px] sm:h-16 sm:w-2/5"/>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full gap-5">
                                <span className="flex bg-[#D434FE] w-full h-[2px]"></span>
                                <span className="flex bg-[#D434FE] w-[200px] sm:w-[610px] min-[900px]:w-[660px]  h-[2px]"></span>
                                <span className="flex bg-[#D434FE] w-full h-[2px]"></span>
                            </div>
                            <div className="flex justify-between items-center h-full w-full">
                                <div className="w-full flex justify-center">
                                    <img src="/images/wisper logo white.png" alt=""  className="h-10 max-[350px]:h-8 w-[50px] sm:h-16 sm:w-2/5 max-[350px]:w-[40px]"/>
                                </div>
                                <div className="flex justify-center gap-3 sm:gap-10 items-center w-full">
                                    <span className="flex bg-[#D434FE] w-[2px] h-10"></span>
                                    <h1 className="text-[12px] sm:text-[35px] w-16 sm:w-full flex justify-center typo_hoop">Pay<span className="text-[#00A3FF]">box</span></h1>
                                    <span className="flex bg-[#D434FE] w-[2px] h-10"></span>
                                </div>
                                <div className="w-full flex justify-center sm:pt-5">
                                    <div>
                                        <h1 className="text-[10px] max-[350px]:text-[8px] sm:text-[31px] voces">Vuzual <span className="volkhov text-[#FF0000]">Plus</span></h1>
                                        <p className="text-[4px] sm:text-[11px] flex justify-end w-full voces">Design Studios</p>
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                    <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute z-10 -bottom-48 -right-20 rotate-180 min-[1000px]:-right-72" />
                </div>
            </div>
        </div>
     );
}
 
export default Prizes;