"use client"
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Rules = () => {
    useEffect(() => {
        AOS.init({
          easing: "ease-in-out",
          duration: 700,
        });
      }, []);
    return ( 
        <div className="flex max-sm:flex-col sm:flex-row-reverse sm:gap-10 min-[850px]:gap-20 justify-center items-center mt-5 sm:mt-0 px-10 min-[850px]:px-16 border-b border-slate-500 py-10 sm:py-2 relative sm:border-b sm:border-slate-500">
             <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute z-10 -top-24 -left-10"/>
             <img src="/images/star.png" alt="" className="absolute top-56 left-12 z-20 animate-pulse"/>
            <Image src="/images/girl.png" width="350" height="300" className="z-40 " alt="" data-aos="fade-zoom-in"/>
            <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute z-10 bottom-24 -right-20 rotate-180"/>
            <div className="relative sm:w-1/2 z-40" data-aos="fade-right">
                <img src="/images/star.png" alt="" className="absolute top-5 right-0 z-20 animate-pulse" />
                <img src="/images/star.png" alt="" className="absolute -bottom-5 left-16 z-20 animate-pulse"/>
                <h1 className="text-[20px] sm:text-[32px] clashDisplay font-bold max-sm:text-center">Rules and <br/><span className="text-[#D434FE]">Guidelines</span></h1>
                <p className="text-[13px] sm:text-[14px] max-sm:text-center max-w-[470px]">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </div>
     );
}
 
export default Rules;