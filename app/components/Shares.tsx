export default function Shares() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <p className="text-[#EBECEC] font-medium text-base">Shares</p>
                <div className="bg-[#1A1520] rounded-[10px] flex items-center w-40 px-3 justify-between">
                    <button className="text-[#EBECEC] text-2xl">-</button>
                    <input type="text" className="bg-[#1A1520] text-[#EBECEC] w-[50px] h-[50px] text-center" />
                    <button className="text-[#EBECEC] text-2xl">+</button>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <p className="text-[#EBECEC] font-medium text-base">Price</p>
                <div className="bg-[#1A1520] rounded-[10px] flex items-center w-40 px-3 justify-center border-b-[#01C36D] border-b-4 ">
                    
                    <input type="text" className="bg-[#1A1520] text-[#EBECEC] w-[100px] h-[50px] text-center" />
                    
                </div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-2 ">
                    <p className="font-medium text-base text-[#EBECEC]">Stop Loss</p>
                    <div className="flex flex-row items-center gap-2">
                        <div className="border rounded-[6.28px] p-[4.28px] gap-[8.55px]">
                            <p className="text-[10px] font-medium">2.0%</p>
                        </div>
                        <div className="border rounded-[6.28px] p-[4.28px] gap-[8.55px]  text-black bg-white">
                            <p className="text-[10px] font-medium">1.5%</p>
                        </div>
                        <div className="border rounded-[6.28px] p-[4.28px] gap-[8.55px]">
                            <p className="text-[10px] font-medium">1.0%</p>
                        </div>
                        <div className="border rounded-[6.28px] p-[4.28px] gap-[8.55px]">
                            <p className="text-[10px] font-medium">0.5%</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1A1520] rounded-[10px] flex items-center w-40 px-3 justify-center">
                    
                    <input type="text" className="bg-[#1A1520] text-[#EBECEC] w-[100px] h-[50px] text-center" placeholder="--"  />
                    
                </div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-2 ">
                    <p className="font-medium text-base text-[#EBECEC]">Target</p>
                    <div className="flex flex-row items-center gap-2">
                        <div className="border rounded-[6.28px] p-[4.28px] gap-[8.55px]">
                            <p className="text-[10px] font-medium">25%</p>
                        </div>
                        <div className="border rounded-[6.28px] p-[4.28px] gap-[8.55px]  text-black bg-white">
                            <p className="text-[10px] font-medium">50%</p>
                        </div>
                        <div className="border rounded-[6.28px] p-[4.28px] gap-[8.55px]">
                            <p className="text-[10px] font-medium">75%</p>
                        </div>
                        <div className="border rounded-[6.28px] p-[4.28px] gap-[8.55px]">
                            <p className="text-[10px] font-medium">MAX</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1A1520] rounded-[10px] flex items-center w-40 px-3 justify-center">
                    
                    <input type="text" className="bg-[#1A1520] text-[#EBECEC] w-[100px] h-[50px] text-center" placeholder="--" />
                    
                </div>
            </div>
      
    </div>
    );
    }