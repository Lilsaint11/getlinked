"use client"
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Intro = () => {
    useEffect(() => {
        AOS.init({
          easing: "ease-in-out",
          duration: 700,
        });
      }, []);
    return ( 
        <div className="flex max-sm:flex-col sm:gap-10 justify-center max-[830px]:items-center mt-5 px-10 max-[345px]:px-5 sm:border-b sm:border-slate-500 sm:py-10" id="overview">
            <div className="flex flex-col justify-center items-center relative sm:w-1/2" data-aos="fade-zoom-in">
                <img src="/images/sata gra.png" alt="" className="absolute top-28 left-0 z-20 animate-pulse"/>
                <Image src="/images/idea.webp" width="300" height="250" alt=""/>
            </div>
            <div className="mt-5 relative flex flex-col max-[830px]:justify-center min-[830px]:pt-[60px] items-center sm:w-1/2" data-aos="fade-left">
               <img src="/images/star pu.png" alt="" className="absolute top-8 right-5 z-20 animate-pulse"/>
                <h3 className="clashDisplay max-[830px]:text-center font-bold text-[20px] min-[830px]:text-[32px] max-[537px]:max-w-[280px]">Introduction to getlinked <span className="text-[#D434FE]">tech Hackathon 1.0</span></h3>
                <p className="text-[13px] text-center mt-3 leading-loose min-[830px]:hidden">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </div>
     );
}
 
export default Intro;