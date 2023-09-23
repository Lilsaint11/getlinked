"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() => {
        AOS.init({
          easing: "ease-in-out",
          duration: 700,
        });
      }, []);
    return ( 
        <div className="flex max-[850px]:flex-col px-8 sm:px-16 pt-10 pb-40 gap-10 mt-5 relative justify-center max-[850px]:items-center">
            <div className="flex flex-col gap-10 min-[850px]:w-full"  data-aos="fade-right">
                <div  className="flex flex-col  justify-center items-center gap-10">
                    <div className="flex flex-col  justify-center max-sm:items-center gap-1 relative w-full">
                        <img src="/images/star-grey2.png" alt="" className="absolute right-3 -top-6  z-20 animate-pulse"/>
                        <h1 className="text-[20px] sm:text-[32px] clashDisplay font-bold max-[850px]:text-center max-w-[200px] sm:max-w-full">Privacy Policy and<br/>
                            <span className="text-[#D434FE]"> Terms</span>
                        </h1>
                        <p  className="text-[12px] sm:text-[14px] max-[850px]:text-center leading-loose">Last updated on September 12, 2023</p>
                    </div>
                    <div className="relative">
                        <img src="/images/star pu2.png" alt="" className="absolute right-8 bottom-0 z-2 w-3 animate-pulse"/>
                        <p  className="text-[12px] sm:text-[14px] max-[850px]:text-center leading-loose">Below are our privacy and policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
                    </div>
                    
                </div>
                <div className="text-[12px] gap-10 flex flex-col justify-center items-center border border-[#D434FE] px-5 py-16 rounded-md relative">
                    <p  className="text-center leading-loose">At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information.This Privacy Policy outlines how we collect,use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                    <div className="w-full gap-2 flex flex-col max-[850px]:items-center  relative z-40">
                        <h2  className="text-[13px] text-[#D434FE] font-bold">Licensing Policy</h2>
                        <p  className="font-bold">Here are terms of our Standard License:</p>
                    </div>
                    <div className="w-full relative z-40">
                        <div className="flex gap-5 items-center">
                            <img src="/images/Vector 3.png" alt="" className="bg-[#2DE100] rounded-full px-[3px]  py-[5px]"/>
                            <p  className="text-[12px] leading-loose">The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <img src="/images/Vector 3.png" alt=""  className="bg-[#2DE100] rounded-full px-[3px]  py-[5px]"/>
                            <p  className="text-[12px] leading-loose">You are licensed to use the item available at any free source sites, for your project developement</p>
                        </div>
                    </div>
                    <button className="w-[96px] h-[31px] bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-md text-[14px]">Read more</button>
                    <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute z-10 bottom-5 -left-24"/>
                    <img src="/images/star pu2.png" alt="" className="absolute  bottom-48 -left-4 z-2 w-3 animate-pulse"/>
                </div>
            </div>
            <div className="relative flex max-[850px]:items-center justify-center sm:h-96 sm:w-1/2 sm:w-full max-[850px]:my-40"  data-aos="fade-up-left">
                <div className="relative flex max-[850px]:items-center justify-center w-full">
                    <img src="/images/safe.png" alt="" className="min-[850px]::w-full  min-[850px]:h-[500px]"/>
                    <img src="/images/manlck.png" alt="" className="absolute -bottom-32 min-[850px]:-bottom-[260px] min-[1000px]:-bottom-[460px] right-8 max-sm:right-6 animate-pulse"/>
                    <img src="/images/star2 pu2.png" alt="" className="absolute left-0 top-20 z-20 w-3 animate-pulse"/>
                    <img src="/images/star2.png" alt="" className="absolute top-24 right-20 z-20 w-2 animate-pulse"/>
                    <img src="/images/star2.png" alt="" className="absolute -bottom-16 left-7 z-20 w-2 animate-pulse"/>
                    <img src="/images/star2-grey.png" alt="" className="absolute -bottom-20 right-10  z-20 w-2 animate-pulse"/>
                </div>
            </div>
            
        </div>
     );
}
 
export default PrivacyPolicy;