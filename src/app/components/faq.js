import Image from "next/image";

const Faq = () => {
    return ( 
        <div className="flex max-sm:flex-col justify-center items-center px-10 border-b border-slate-500 py-20 gap-10" id="faqs">
            <div className="sm:w-1/2">
                <div className="flex flex-col  justify-center max-sm:items-center gap-3 relative">
                <img src="/images/star pu.png" alt="" className="absolute -top-3 left-5 z-20 w-3"/>
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
            <div className="relative sm:w-1/2">
                <img src="/images/sata gra.png" alt="" className="absolute -top-4 left-36 z-20"/>
                <img src="/images/star pu.png" alt="" className="absolute left-16 top-24 z-20"/>
                <img src="/images/star.png" alt="" className="absolute -bottom-1 right-16 z-20 w-4"/>
                <img src="/images/star-grey.png" alt="" className="absolute left-6 top-36  z-20 w-2"/>
                <Image src="/images/cwok_casual_21 1.png" width="500" height="500" alt=""/>
            </div>
        </div>
     );
}
 
export default Faq;