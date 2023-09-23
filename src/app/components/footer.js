const Footer = () => {
    return ( 
        <div className="bg-[#100B20] flex flex-col items-center  px-[60px]  py-10 gap-16">
            <div className="flex max-sm:flex-col gap-10 w-full">
                <div className="flex flex-col gap-4 relative w-full">
                    <img src="/images/star.png" alt="" className="absolute top-24 -left-6 z-20 w-2"/>
                    <h1 className="text-[20px] font-bold clashDisplay text-[#FFEDFF] leading-[15px]">get<span className="text-[#D434FE]">linked</span></h1>
                    
                    <p className="text-[12px] leading-loose">Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>

                    <div className="flex gap-2 items-center mt-5">
                        <p className="text-[12px]">Terms of Use</p>
                        <span className="flex bg-[#D434FE] w-[2px] h-3"></span> 
                        <p className="text-[12px]">Privacy Policy</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 relative w-full sm:items-center">
                    <div className="flex flex-col gap-3">
                        <img src="/images/star-grey2.png" alt="" className="absolute right-28 top-20  z-20 w-3"/>
                        <h1 className="text-[14px] font-bold  text-[#D434FE]">Useful Links</h1>
                        <p className="text-[12px] cursor-pointer">Overview</p>
                        <p className="text-[12px] cursor-pointer">Timeline</p>
                        <p className="text-[12px] cursor-pointer">FAQs</p>
                        <p className="text-[12px] cursor-pointer">Register</p>
                        <div className="flex gap-4 items-center">
                            <p className="text-[12px] text-[#D434FE]">Follow us</p>
                            <img src="images/mdi_instagram.png" alt="" className="w-5 h-5 cursor-pointer hover:scale-110 transition duration-300"/>
                            <img src="images/x.png" alt=""className="w-4 h-4 cursor-pointer hover:scale-110 transition duration-300" />
                            <img src="images/fb.png" alt="" className="w-3 h-4 cursor-pointer hover:scale-110 transition duration-300"/>
                            <img src="images/in.png" alt="" className="w-4 h-4 cursor-pointer hover:scale-110 transition duration-300"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 relative w-full sm:items-center">
                    <div className="flex flex-col gap-3">
                        <img src="/images/star.png" alt="" className="absolute top-12 right-3 z-20 w-2"/>
                        <h1 className="text-[14px] font-bold  text-[#D434FE]">Contact Us</h1>
                        <div className="flex gap-2 items-center">
                            <img src="images/Group.png" alt=""className="w-3 h-3" />
                            <p className="text-[12px]">+234 679 81819</p>
                        </div>
                        <div className="flex gap-2 ">
                            <img src="images/location.png" alt=""className="w-3 h-3 mt-1" />
                            <p className="text-[12px] max-w-[100px]">27,Alara Street Yaba 100012 Lagos State</p>
                        </div>
                    </div>    
                </div>
            </div>
            <div className="relative">
                <img src="/images/star pu.png" alt="" className="absolute left-10 -top-9 z-20"/>
                <p className="text-[12px]">All rights reserved. © getlinked Ltd.</p>
            </div>
        </div>
     );
}
 
export default Footer;