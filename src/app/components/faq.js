"use client"
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Faq = () => {
    useEffect(() => {
        AOS.init({
          easing: "ease-in-out",
          duration: 700,
        });
      }, []);
    return ( 
        <div className="flex max-sm:flex-col justify-center items-center px-10 border-b border-slate-500 py-24 gap-10" id="faqs">
            <div className="sm:w-1/2"  data-aos="fade-right">
                <div className="flex flex-col  justify-center max-sm:items-center gap-3 relative">
                <img src="/images/star pu.png" alt="" className="absolute -top-3 left-5 z-20 w-3 animate-pulse"/>
                    <h1 className="text-[20px] clashDisplay font-bold max-sm:text-center sm:text-[32px] sm:max-w-full">Frequently Ask<br/>
                        <span className="text-[#D434FE]"> Question</span>
                    </h1>
                    <p  className="text-[12px] sm:text-[14px] max-sm:text-center leading-loose">We got answers to the questions that you might want to ask about <span className="font-bold">getlinked Hackathon 1.0</span></p>
                </div>
                <div className="flex flex-col  justify-center w-full gap-5">
                    <div className="flex items-center justify-between  gap-5 border-b border-[#D434FE] pb-2">
                        <p  className="text-[12px] sm:text-[14px]">Can I work on a project I started before the hackathon?</p>
                        <p className="text-[#D434FE] font-bold">+</p>
                    </div>
                    <div className="flex items-center justify-between gap-5 border-b border-[#D434FE] pb-2">
                        <p  className="text-[12px] sm:text-[14px]">What happens if I need help during the hackathon?</p>
                        <p className="text-[#D434FE] font-bold">+</p>
                    </div>
                    <div className="flex items-center justify-between gap-5 border-b border-[#D434FE] pb-2">
                        <p  className="text-[12px] sm:text-[14px]">What happens if I don't have an idea for a project?</p>
                        <p className="text-[#D434FE] font-bold">+</p>
                    </div>
                    <div className="flex items-center justify-between gap-5 border-b border-[#D434FE] pb-2">
                        <p  className="text-[12px] sm:text-[14px]">Can I join a team or do I have to come with one?</p>
                        <p className="text-[#D434FE] font-bold">+</p>
                    </div>
                    <div className="flex items-center justify-between gap-5 border-b border-[#D434FE] pb-2">
                        <p  className="text-[12px] sm:text-[14px]">What happens after the hackathon ends</p>
                        <p className="text-[#D434FE] font-bold">+</p>
                    </div>
                    <div className="flex items-center justify-between gap-5 border-b border-[#D434FE] pb-2">
                        <p  className="text-[12px] sm:text-[14px]">Can I work on a project I started before the hackathon?</p>
                        <p className="text-[#D434FE] font-bold">+</p>
                    </div>
                </div>
            </div>
            <div className="relative sm:w-1/2 max-sm:pt-12"  data-aos="fade-zoom-in">
                <img src="/images/star.png" alt="" className="absolute -bottom-1 right-16 z-20 w-4 animate-pulse"/>
                <img src="/images/star-grey2.png" alt="" className="absolute left-6 top-36  z-20 max-sm:w-2 animate-pulse"/>
                <div className="relative">
                    <Image src="/images/thinker.webp" width="500" height="500" alt=""/>
                </div>
            </div>
        </div>
     );
}
 
export default Faq;