
const Confirmation = () => {
    return ( 
        <div className="flex flex-col items-center justify-center bg-[rgba(0,0,0,0.8)] w-screen h-screen fixed top-0 p-10 z-50">
            <div className="flex flex-col items-center justify-center rounded-md border border-[#D434FE] relative p-5 gap-5 relative">
                <img src="/images/sata gra.png" alt="" className="absolute right-8 -bottom-7 z-20"/>
                <img src="/images/star-grey2.png" alt="" className="absolute left-5 top-[200px]  z-20 w-4"/>
                <img src="/images/star pu2.png" alt="" className="absolute -right-2 -top-5 z-20"/>
                <div className="relative flex">
                    <img src="/images/successfully-done.png" alt="" />
                    <img src="/images/successful-man.png" alt="" className="-ml-28 top-0 right-0"/>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <h1 className="text-[16px] sm:text-[32px] font-semibold text-center max-sm:max-w-[200px]">Congratulations<br/> you have successfully Registered!</h1>
                    <div>
                        <p className="text-[12px] sm:text-[14px] font-medium sm:font-semibold text-center">Yes, it was easy and you did it!</p>
                        <p className="text-[12px] sm:text-[14px] font-medium sm:font-semibold text-center flex items-center gap-1">check your mail box for next step <img src="/images/wink.png" alt="" className="w-[14px] h-[14px]"/></p>
                    </div>
                </div>
                <button className="w-full h-[53px] bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-md text-[16px]">Back</button>
            </div>
        </div>
     );
}
 
export default Confirmation;