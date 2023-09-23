"use client"
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Criteria = () => {
    useEffect(() => {
        AOS.init({
          easing: "ease-in-out",
          duration: 700,
        });
      }, []);
    return ( 
        <div className="flex max-[850px]:flex-col justify-center items-center mt-5 px-10 border-b border-slate-500 py-10 relative sm:gap-5">
             <img src="/images/star pu.png" alt="" className="absolute top-0 left-40 z-20 w-3 animate-pulse"/>
             <img src="/images/star-grey2.png" alt="" className="absolute top-52 right-48 z-20 w-2 animate-pulse"/>
             <div className="relative min-[850px]:w-1/2" data-aos="fade-zoom-in">
                <Image src="/images/farm.png" width="500" height="500" className="z-50 relative" alt=""/>
                <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute z-10 -bottom-32 -left-28"/>
             </div>
             <div className="flex flex-col gap-5 max-[850px]:items-center justify-center relative z-40 min-[850px]:w-1/2" data-aos="fade-left">
                <h1 className="text-[20px] min-[850px]:text-[32px] clashDisplay font-bold max-[850px]:text-center max-w-[200px] sm:max-w-full z-40 relative">Judging Criteria<br/>
                <span className="text-[#D434FE]"> Key attributes</span></h1>
                <div className="flex flex-col gap-5 relative">
                   <p className="text-[12px] min-[850px]:text-[14px] max-sm:text-center">
                       <span className="text-[#FF26B9] font-bold">Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                    </p>
                   <p className="text-[12px] min-[850px]:text-[14px] max-sm:text-center">
                        <span className="text-[#FF26B9] font-bold">Functionality: </span>Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                    </p>
                   <p className="text-[12px] min-[850px]:text-[14px] max-sm:text-center">
                        <span className="text-[#FF26B9] font-bold">Impact and Relevance: </span>Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                    </p>
                   <p className="text-[12px] min-[850px]:text-[14px] max-sm:text-center">
                        <span className="text-[#FF26B9] font-bold">Technical Complexity: </span>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                    </p>
                   <p className="text-[12px] min-[850px]:text-[14px] max-sm:text-center">
                        <span className="text-[#FF26B9] font-bold">Adherence to Hackathon Rules: </span>Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
                    </p>
                </div>
                <img src="/images/star.png" alt="" className="absolute bottom-7 right-7 z-20 animate-pulse"/>
                <button className="w-[96px] min-[850px]:w-[172px] h-[31px] min-[850px]:h-[53px] bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-md text-[14px]">Read more</button>
             </div>
             <img src="/images/Purple-Lens-Flare-PNG.png" alt="" className="absolute z-10 -bottom-16 -right-20 rotate-180"/>
        </div>
     );
}
 
export default Criteria;