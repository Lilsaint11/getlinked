"use client";
import Link from "next/link";
import { useState } from "react";
import { RiArrowLeftSLine } from 'react-icons/ri';
import { motion } from "framer-motion"
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "../components/header";
 const Contact = () => {
    useEffect(() => {
        AOS.init({
          easing: "ease-in-out",
          duration: 700,
        });
      }, []);
     //stores form content into a state called formData which can be reset later
    const [formData, setFormData] = useState({
        teamName: "",
        topic: "",
        email: "",
        message: ""
    });
    const {teamName,topic,email, message} = formData;

    //changes and saves the state of the inputs as the user types..
    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }

    //checks if all inputs are filled and alerts a success message if so
    function onSubmit(e){
        e.preventDefault()
        if(teamName && topic && email && message){
            alert("We have receieved your mail and will get back to you as soon as posibble")
        }else{
            alert("please fill  in all details")
        }
    }

    return ( 
        <motion.div
        initial={{x:'100vw'}}
        animate={{x:0 ,transition:{duration:0.1}}}
        exit={{x:'-100vw',transition:{ease:'easeInOut'}}} 
        className="bg-[#150E28] text-white ">
            <div className="max-sm:hidden">
                <Header />
            </div>
            <div className="flex max-[850px]:flex-col min-[850px]:flex-row-reverse gap-5 bg-[#150E28] text-white p-10  min-[850px]:p-16  max-[850px]:items-center justify-center min-[850px]:justify-between min-[850px]:pl-32 relative ">
            <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute z-10 -top-5 -left-7"/>
            <img src="/images/sata gra.png" alt="" className="absolute top-16 left-44 z-20 animate-pulse"/>
            <img src="/images/star-grey2.png" alt="" className="absolute right-10 top-36  z-20 w-4 animate-pulse"/>
            <div className="w-full sm:hidden">
                <Link href="/"><RiArrowLeftSLine  className="text-2xl rounded-full  border border-t-[#903AFF] border-x-[#C530DE] border-b-[#FF26B9] p-1 cursor-pointer flex items-center justify-center relative z-40"/></Link>
            </div>
            <div className="flex flex-col gap-5 relative z-40 sm:p-10 sm:backdrop-opacity-10 sm:bg-[#903AFF]/10 min-[850px]:w-1/2" data-aos="fade-up" data-aos-delay="200">
                <img src="/images/star pu2.png" alt="" className="absolute -left-2 bottom-6 z-20 animate-pulse"/>
                <img src="/images/star2.png" alt="" className="absolute bottom-20 -right-6 z-20 animate-pulse"/> 
                <h1 className="text-[20px] font-semibold clashDisplay text-[#D434FE] mt-5">Questions or need assistance?<br/> Let us know about it</h1>
                <p className="text-[12px] font-normal sm:hidden">Email us below to any question related to our event</p>
                <form action="" className="flex flex-col gap-5 justify-center items-center" onSubmit={onSubmit}>
                    <input type="text" placeholder="Team's Name" id="teamName" value={teamName} onChange={onChange} className="w-full bg-transparent text-black h-[47px] focus:outline-none rounded-sm pl-5 border border-white text-white placeholder:text-white"/>
                    <input type="text" placeholder="Topic" id="topic" value={topic} onChange={onChange} className="w-full bg-transparent text-black h-[47px] focus:outline-none rounded-sm pl-5 border border-white text-white placeholder:text-white"/>
                    <input type="email" placeholder="Email" id="email" value={email} onChange={onChange}  className="w-full bg-transparent text-black h-[47px] focus:outline-none rounded-sm pl-5 border border-white text-white placeholder:text-white"/>
                    <textarea name="" id="" placeholder="Message" id="message" value={message} onChange={onChange} className="w-full bg-transparent text-black h-[160px] sm:h-[119px] focus:outline-none rounded-sm pl-5 pt-5 border border-white text-white placeholder:text-white"></textarea>
                    <button className="w-[172px] h-[53px] bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-md text-[16px]">Submit</button>
                </form>
            </div>
            <div className="relative z-40 flex flex-col gap-5 min-[850px]:pt-16" data-aos="fade-up">
                <div className="flex flex-col gap-5 max-[850px]:hidden">
                    <h1 className="text-[32px] clashDisplay font-semibold text-[#D434FE]">Get in touch</h1>
                    <p className="text-[16px]">Contact<br/> Information</p>
                    <p className="text-[16px]">27,Alara Street<br/> Yaba 100012<br/> Lagos State</p>
                    <p className="text-[16px]">Call Us : 07067981819</p>
                    <p className="text-[16px]">we are open from Monday-Friday<br/> 08:00am - 05:00pm</p>
                </div>
                <div className="flex flex-col gap-2 max-[850px]:items-center justify-center">
                    <h1 className="text-[12px] font-normal text-[#D434FE]">Share on</h1>
                    <div className="flex items-center gap-3">
                        <img src="images/mdi_instagram.png" alt="" className="w-4 h-4 cursor-pointer hover:scale-110 transition duration-300"/>
                        <img src="images/x.png" alt=""className="w-3 h-3 cursor-pointer hover:scale-110 transition duration-300" />
                        <img src="images/fb.png" alt="" className="w-2 h-3 cursor-pointer hover:scale-110 transition duration-300"/>
                        <img src="images/in.png" alt="" className="w-3 h-3 cursor-pointer hover:scale-110 transition duration-300"/>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
     );
}
 
export default Contact;