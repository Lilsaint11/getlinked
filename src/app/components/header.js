"use client";
import { AiOutlineClose } from 'react-icons/ai';
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false)
    return ( 
        <div className="relative z-50">       
            <div className=" py-5 flex justify-between items-center border-b border-slate-500 px-10 min-[850px]:px-16">
                <h1 className="text-[18px] font-bold clashDisplay text-[#FFEDFF]">get<span className="text-[#D434FE]">linked</span></h1>
                <div className="cursor-pointer sm:hidden" onClick={()=> setMenuOpen(true)}>
                    <img src="/images/vector.png" alt=""/>
                </div>
               <div className={`flex flex-col gap-10 max-sm:w-[348px] max-sm:h-[492px] bg-[#150E28] max-sm:absolute top-0 z-50  max-sm:py-3  max-sm:px-12 max-sm:rounded-md transition duration-500 right-0 ${!menuOpen && "max-sm:translate-x-[350px]"} ${menuOpen && "translate-x-0"}`}>
                    <div className="flex justify-end w-full sm:hidden">
                        <AiOutlineClose className='text-2xl rounded-full border border-t-[#903AFF] border-x-[#C530DE] border-b-[#FF26B9] cursor-pointer p-1' onClick={()=> setMenuOpen(false)}/>
                    </div>
                    <div className="flex max-sm:flex-col sm:items-center gap-5 sm:gap-8 min-[780px]:gap-10">
                        <Link href="/#timeline"><p className="text-[18px] sm:text-[14px] min-[780px]:text-[16px] sm:font-normal font-medium cursor-pointer" onClick={()=> setMenuOpen(false)}>Timeline</p></Link>
                        <p className="text-[18px] sm:text-[14px] min-[780px]:text-[16px] sm:font-normal font-medium cursor-pointer" onClick={()=> setMenuOpen(false)}>Overview</p>
                        <Link href="/#faqs"><p className="text-[18px] sm:text-[14px] min-[780px]:text-[16px] sm:font-normal font-medium cursor-pointer" onClick={()=> setMenuOpen(false)}>FAQs</p></Link>
                        <Link href="/contact"><p className="text-[18px] sm:text-[14px] min-[780px]:text-[16px] sm:font-normal font-medium cursor-pointer" onClick={()=> setMenuOpen(false)}>Contact</p></Link>
                        <Link href="/register"><button className="w-[172px] sm:w-[122px] min-[780px]:w-[172px] h-[53px] sm:h-[40px] min-[780px]:h-[53px] bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-md text-[16px] cursor-pointer">Register</button></Link>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Header;