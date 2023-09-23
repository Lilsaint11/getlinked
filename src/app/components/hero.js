"use client";
import Link from "next/link";
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    const typewriter = useRef(null);
    useEffect(() => {
  
        const typed = new Typed(typewriter.current, {
          strings: ["Igniting a Revolution in HR Innovation"],
          typeSpeed:70,
          showCursor: false,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);
    return ( 
        <div className="flex flex-col max-[1000px]:text-[80px]justify-center items-center pt-10 px-10 min-[850px]:px-16 max-[415px]:px-5 montserrat z-40 relative  sm:border-b sm:border-slate-500 w-full">
            <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute -z-10 -top-20 left-0"/>
            <div className="sm:flex sm:w-full sm:justify-end">
                <div className="flex flex-col mb-10">
                    <h3 className="italic text-[16px] sm:text-[20px] min-[850px]:text-[28px] min-[1000px]:text-[36px] font-bold  flex max-[415px]:text-[14px]  max-[350px]:flex-col gap-1 text-center" ref={typewriter}> </h3>
                    <div className="w-full flex justify-end">
                        <img src="/images/Vector 4.png" alt="" className="w-36 min-[850px]:w-72"/>
                    </div>
                </div>
            </div>
        
            <div className="sm:flex min-[1000px]:justify-between w-full">
                <div className="flex flex-col  max-[780px]:justify-between min-[780px]:gap-10 max-sm:items-center relative sm:w-1/2">
                    <img src="/images/star.png" alt="" className="absolute -top-5 left-28 z-20"/>
                    <img src="/images/star-grey.png" alt="" className="absolute -top-5 right-12 z-20"/>
                    <img src="/images/star-grey.png" alt="" className="absolute top-40 right-16 z-20"/>
                    <div className="flex flex-col justify-center max-sm:items-center">
                        <h1 className="flex items-center text-[32px] sm:text-[36px] min-[780px]:text-[45px] min-[895px]:text-[50px] min-[1000px]:text-[60px] min-[1200px]:text-[70px] font-bold clashDisplay text-center leading-tight">
                        getlinked Te<span className="leading-[14px] -mt-7 flex flex-col justify-center items-center"><img src="/images/bulb.png" alt=""/>c</span>h
                        </h1>

                        <h1 className="flex items-center text-[32px] sm:text-[36px] min-[780px]:text-[45px] min-[890px]:text-[50px] min-[1000px]:text-[60px]  min-[1200px]:text-[70px] font-bold clashDisplay text-center gap-1 leading-tight">Hackathon <span className="text-[#D434FE] flex items-center">1.0 <img src="/images/chain.png" alt="" className="w-8"/> 
                        <img src="/images/boom.png" alt=""  className="w-6"/></span> 
                        </h1>

                        <p className="montserrat text-[13px] min-[850px]:text-[15px] min-[1000px]:text-[20px] max-sm:text-center pt-2 font-normal">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    
                        <Link href="/register"><button className="w-[152px] sm:w-[172px] h-[47px] sm:h[53px] bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-md text-[14px] sm:text-[16px] mt-5">Register</button></Link>
                    </div>
                    <h1 className="unicaOne text-[48px] sm:text-[64px] mt-5 leading-[45px]">00<span className="montserrat text-[14px]">H</span>   00<span className="montserrat text-[14px]">M</span>  00<span className="montserrat text-[14px]">S</span></h1>
                </div>
                <div className="relative flex justify-center items-center sm:w-1/2">
                    <img src="/images/man-wearing-smart-glasses-touching-virtual-screen 1.png" alt="" className="w-full"/>
                    <img src="/images/bubble.png" alt=""className="absolute top-0  min-[900px]:w-80 min-[1100px]:w-[450px]" />
                    <p className="text-[8px] min-[950px]:text-[10px] min-[1100px]:text-[12px]  leading-loose absolute max-[830px]:hidden bottom-5 min-[1100px]:bottom-10 right-5 max-w-[300px] min-[1100px]:max-w-[420px]">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
                </div>
            </div>
        </div>
     ); 
}
 
export default Hero;