"use client"
import Image from "next/image";
import { useState } from "react";
import Confirmation from "../components/confirmation";
import Header from "../components/header";
import { motion } from "framer-motion"

const Register = () => {
    const[registered, setRegistered] = useState(false)
      //stores form content into a state called formData which can be reset later
      const [formData, setFormData] = useState({
        teamName: "",
        phone:"",
        email: "",
        topic: "",
        category: "",
        groupSize:"",
        policy:false
    });
    const {teamName,phone,email,topic, category,groupSize,policy} = formData;

    //changes and saves the state of the inputs as the user types..
    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }

    //checks if all inputs are filled and alerts a success message if so
    function onSubmit(e){
        e.preventDefault()
        if(teamName && phone && email && topic && category && groupSize && policy){
            setRegistered(true)
        }else{
            alert("please fill  in all details")
        }
    }
    return ( 
        <motion.div
        initial={{x:'100vw'}}
        animate={{x:0 ,transition:{duration:0.2}}}
        exit={{x:'-100vw',transition:{ease:'easeInOut'}}} 
        className="bg-[#150E28] text-white ">
            <div className="max-sm:hidden">
                <Header />
            </div>
            <div className="flex max-[750px]:flex-col gap-5 bg-[#150E28] text-white py-10 px-12 max-[335px]:px-5 items-center justify-center relative ">
                {registered &&<Confirmation registered={registered} setRegistered={setRegistered}/>}
                <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute z-10 -top-1 -left-7"/>
                <img src="/images/sata gra.png" alt="" className="absolute right-16 top-48  z-20 animate-pulse"/>
                <img src="/images/star-grey2.png" alt="" className="absolute left-5 top-[350px]  z-20 w-4 animate-pulse"/>
                <img src="/images/star pu2.png" alt="" className="absolute right-6 bottom-64 z-20 animate-pulse"/>
                <div className="w-full sm:hidden">
                    <h1 className="text-[15px] font-bold clashDisplay text-[#D434FE]">Register</h1>
                </div>
                <div className="relative z-40 min-[750px]:w-1/2">
                    <Image width="700" height="700" src="/images/man.webp" alt="" className="w-[200px] min-[750px]:w-full mt-2"/>
                </div>
                <div className="flex flex-col max-sm:items-center justify-center gap-2 relative z-40 min-[750px]:w-1/2 sm:p-10 sm:backdrop-opacity-10 sm:bg-[#903AFF]/10 rounded-md w-full">
                <h1 className="text-[32px] font-semibold clashDisplay text-[#D434FE] max-sm:hidden">Register</h1>
                        <div className="flex items-end gap-3">
                        <p className="text-[12px] min-[750px]:text-[14px] leading-[12px]">Be part of this movement!</p>
                        <div className="flex border-b border-[#D434FE] border-dashed w-20  justify-center">
                            <img src="/images/girl-walk.png" alt="" className="w-5 h-5"/>
                            <img src="/images/man-walk.png" alt="" className="w-5 h-5"/>
                        </div>
                    </div>
                    <h1 className="text-[20px] min-[750px]:text-[24px] max-[335px]:text-[18px] mb-3">CREATE YOUR ACCOUNT</h1>
                    <form action="" className="flex flex-col gap-5 justify-center items-center" onSubmit={onSubmit}>
                        <div className="flex max-[950px]:flex-col gap-5 justify-center items-center w-full">
                            <div className="flex flex-col w-full relative z-40 gap-2">
                                <label htmlFor="" className="text-[13px] min-[750px]:text-[14px]">Team's Name</label>
                                <input type="text" placeholder="Enter the name of your group" id="teamName" value={teamName} onChange={onChange} className="text-[13px] pl-5 rounded-sm h-[39px] border border-white focus:outline-none bg-transparent w-full" required/>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="" className="text-[13px] min-[750px]:text-[14px]">Phone</label>
                                <input type="text" placeholder="Enter your phone number" id="phone" value={phone} onChange={onChange} className="text-[13px] pl-5 rounded-sm h-[39px] border border-white focus:outline-none bg-transparent w-full" required/>
                            </div>
                        </div>
                        <div className="flex max-[950px]:flex-col gap-5 justify-center items-center w-full">
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="" className="text-[13px] min-[750px]:text-[14px]">Email</label>
                                <input type="text" placeholder="Enter your email address" id="email" value={email} onChange={onChange} className="text-[13px] pl-5 rounded-sm h-[39px] border border-white focus:outline-none bg-transparent w-full" required/>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="" className="text-[13px] min-[750px]:text-[14px]">Project Topic</label>
                                <input type="text" placeholder="What is your group project topic" id="topic" value={topic} onChange={onChange} className="text-[13px] pl-5 rounded-sm h-[39px] border border-white focus:outline-none bg-transparent w-full" required/>
                            </div>
                        </div>
                        <div className="flex w-full gap-5 ">
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="" className="text-[13px] min-[750px]:text-[14px]">Category</label>
                                <select name="category" id="category" value={category} onChange={onChange} className="text-[13px] pl-5 rounded-sm h-[39px] border border-white focus:outline-none bg-transparent pr-2" required>
                                    <option value="" className="bg-[#150E28]">Select your category</option>
                                    <option value="category1" className="bg-[#150E28]">category 1</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="" className="text-[13px] min-[750px]:text-[14px]">Group Size</label>
                                <select name="groupSize" id="groupSize" value={groupSize} onChange={onChange} className="text-[13px] pl-5 pr-2 rounded-sm h-[39px] border border-white focus:outline-none bg-transparent" required>
                                    <option value="" className="bg-[#150E28]">Select</option>
                                    <option value="Select1"className="bg-[#150E28]" >Select 1</option>
                                </select>
                            </div>
                        </div>
                        <p className="text-[9px] min-[750px]:text-[12px] italic text-[#FF26B9] w-full">Please review your registration details before submitting</p>
                        <div className="flex items-start gap-2 items-center sm:w-full">
                            <input type="checkbox" name="policy" id="policy" value={policy} onChange={onChange}  className="cursor-pointer" required/>
                            <p className="text-[10px] min-[750px]:text-[12px]">I agreed with the event terms and conditions and privacy policy</p>
                        </div>
                        <button  className="w-[172px] sm:w-full h-[53px] bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-md text-[16px] cursor-pointer"  disabled>Submit</button>
                    </form>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Register;