const Timeline = () => {
    return ( 
        <div className="flex flex-col justify-center items-center px-8 min-[850px]:px-16  py-10 gap-10" id="timeline">
            <div className="flex flex-col justify-center items-center  gap-2">
                <h1 className="text-[20px] sm:text-[32px] clashDisplay font-bold text-center">Timeline</h1>
                <p className="text-center text-[14px] font-normal sm:w-96">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
            </div>
            <div className="text-[12px] flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 min-[850px]:w-full min-[850px]:justify-center">
                        <div className="w-[19px] sm:w-[53px] flex justify-center items-center">
                           <span className="flex relative bg-[#D434FE] w-[1px] h-full  min-[850px]:h-28"></span> 
                        </div>
                        <div className="flex flex-col gap-2 w-full relative min-[850px]:hidden">
                            <img src="/images/star pu.png" alt="" className="absolute left-4 -top-5 z-20"/>
                            <h3 className="text-[12px] sm:text-[24px] sm:text-[24px] font-bold text-[#D434FE]">Hackathon Announcement</h3>
                            <p className="sm:text-[16px]">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center w-full min-[850px]:justify-between">
                        <div className="flex flex-col gap-2  relative w-2/5 max-[850px]:hidden">
                            <img src="/images/star pu.png" alt="" className="absolute left-4 -top-5 z-20"/>
                            <h3 className="text-[12px] sm:text-[24px] sm:text-[24px] font-bold text-[#D434FE]">Hackathon Announcement</h3>
                            <p className="sm:text-[16px]">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                        </div>
                        <h1 className="rounded-full w-[19px] h-[19px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-bold sm:w-[53px] sm:h-[53px] sm:text-[24px]">1</h1>
                        <p className="text-[12px] sm:text-[24px] font-bold text-[#D434FE] min-[850px]:w-2/5">November 18, 2023</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 min-[850px]:w-full min-[850px]:justify-center">
                        <div className="w-[19px] sm:w-[53px] flex justify-center items-center">
                           <span className="flex bg-[#D434FE] w-[1px] h-full min-[850px]:h-28"></span> 
                        </div>
                        <div className="flex flex-col gap-2 w-full min-[850px]:hidden">
                            <h3 className="text-[12px] sm:text-[24px] font-bold text-[#D434FE]">Teams Registration begins</h3>
                            <p className="sm:text-[16px]">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center w-full min-[850px]:justify-between">
                        <h1 className="rounded-full w-[19px] h-[19px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-bold sm:w-[53px] sm:h-[53px] sm:text-[24px] min-[850px]:hidden">2</h1>
                        <p className="text-[12px] sm:text-[24px] font-bold text-[#D434FE] min-[850px]:w-2/5" >November 18, 2023</p>
                        <h1 className="rounded-full w-[19px] h-[19px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-bold sm:w-[53px] sm:h-[53px] sm:text-[24px] max-[850px]:hidden">2</h1>
                        <div className="flex flex-col gap-2 w-2/5 max-[850px]:hidden">
                            <h3 className="text-[12px] sm:text-[24px] font-bold text-[#D434FE]">Teams Registration begins</h3>
                            <p className="sm:text-[16px]">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 min-[850px]:w-full min-[850px]:justify-center">
                        <div className="w-[19px] sm:w-[53px] flex justify-center items-center">
                           <span className="flex bg-[#D434FE] w-[1px] h-full min-[850px]:h-28"></span> 
                        </div>
                        <div className="flex flex-col gap-2 w-full min-[850px]:hidden">
                            <h3 className="text-[12px] sm:text-[24px] font-bold text-[#D434FE]">Teams Registration ends</h3>
                            <p className="sm:text-[16px]">Interested Participants are no longer Allowed to register </p>
                        </div>
                    </div>
                    <div className="flex gap-2 relative items-center w-full min-[850px]:justify-between">
                    <div className="flex flex-col gap-2 w-2/5 max-[850px]:hidden">
                            <h3 className="text-[12px] sm:text-[24px] font-bold text-[#D434FE]">Teams Registration ends</h3>
                            <p className="sm:text-[16px]">Interested Participants are no longer Allowed to register </p>
                        </div>
                        <h1 className="rounded-full w-[19px] h-[19px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-bold sm:w-[53px] sm:h-[53px] sm:text-[24px]">3</h1>
                        <p className="text-[12px] sm:text-[24px] font-bold text-[#D434FE] min-[850px]:w-2/5">November 18, 2023</p>
                        <img src="/images/star.png" alt="" className="absolute -bottom-1 right-16 z-20 w-2"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 min-[850px]:w-full min-[850px]:justify-center">
                        <div className="w-[19px] sm:w-[53px] flex justify-center items-center">
                           <span className="flex bg-[#D434FE] w-[1px] h-full min-[850px]:h-28"></span> 
                        </div>
                        <div className="flex flex-col gap-2 w-full min-[850px]:hidden">
                            <h3 className="text-[12px] sm:text-[24px] font-bold text-[#D434FE]">Announcement of the accepted teams and ideas</h3>
                            <p className="sm:text-[16px]">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced </p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center w-full min-[850px]:justify-between">
                        <h1 className="rounded-full w-[19px] h-[19px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-bold sm:w-[53px] sm:h-[53px] sm:text-[24px] min-[850px]:hidden">4</h1>
                        <p className="text-[12px] sm:text-[24px] font-bold text-[#D434FE] min-[850px]:w-2/5">November 18, 2023</p>
                        <h1 className="rounded-full w-[19px] h-[19px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-bold sm:w-[53px] sm:h-[53px] sm:text-[24px] max-[850px]:hidden">4</h1>
                        <div className="flex flex-col gap-2 w-2/5 max-[850px]:hidden">
                            <h3 className="text-[12px] sm:text-[24px] font-bold text-[#D434FE]">Announcement of the accepted teams and ideas</h3>
                            <p className="sm:text-[16px]">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 min-[850px]:w-full min-[850px]:justify-center">
                        <div className="w-[19px] sm:w-[53px] flex justify-center items-center">
                           <span className="flex bg-[#D434FE] w-[1px] h-full min-[850px]:h-28"></span> 
                        </div>
                        <div className="flex flex-col gap-2 w-full min-[850px]:hidden">
                            <h3 className="text-[12px] sm:text-[24px] font-bold text-[#D434FE]">Getlinked Hackathon 1.0 Offically Begins</h3>
                            <p className="sm:text-[16px]">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center w-full min-[850px]:justify-between">
                    <div className="flex flex-col gap-2 w-2/5 max-[850px]:hidden">
                            <h3 className="text-[12px] sm:text-[24px] font-bold text-[#D434FE]">Getlinked Hackathon 1.0 Offically Begins</h3>
                            <p className="sm:text-[16px]">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                        </div>
                        <h1 className="rounded-full w-[19px] h-[19px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-bold sm:w-[53px] sm:h-[53px] sm:text-[24px]">5</h1>
                        <p className="text-[12px] sm:text-[24px] font-bold text-[#D434FE] min-[850px]:w-2/5">November 18, 2023</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2  min-[850px]:w-full min-[850px]:justify-center">
                        <div className="w-[19px] sm:w-[53px] flex justify-center items-center">
                           <span className="flex bg-[#D434FE] w-[1px] h-full min-[850px]:h-28"></span> 
                        </div>
                        <div className="flex flex-col gap-2 w-full  min-[850px]:hidden">
                            <h3 className="text-[12px] sm:text-[24px] font-bold text-[#D434FE]">Demo Day</h3>
                            <p className="sm:text-[16px]">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                        </div>
                    </div>
                    <div className="flex gap-2 relative items-center w-full min-[850px]:justify-between">
                        <h1 className="rounded-full w-[19px] h-[19px] sm:w-[53px] sm:h-[53px] sm:text-[24px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-bold min-[850px]:hidden">6</h1>
                        <p className="text-[12px] sm:text-[24px] font-bold text-[#D434FE] min-[850px]:w-2/5">November 18, 2023</p>
                        <h1 className="rounded-full w-[19px] h-[19px] sm:w-[53px] sm:h-[53px] sm:text-[24px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-bold max-[850px]:hidden">6</h1>
                        <div className="flex flex-col gap-2 w-2/5 max-[850px]:hidden">
                            <h3 className="text-[12px] font-bold text-[#D434FE]">Demo Day</h3>
                            <p className="sm:text-[16px]">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                        </div>
                        <img src="/images/star-grey.png" alt="" className="absolute -left-4 top-10  z-20 w-3"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Timeline;