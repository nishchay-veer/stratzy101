import { FaArrowTrendDown } from 'react-icons/fa6'
export default function Info() {
    return (
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start w-3/4 justify-between">
            <p className="font-bold text-xl">TATA STEEL</p>
            <p className="font-medium text-base text-[#EBECECCC]">TickerName</p>
          </div>
          <div className="flex flex-col items-end justify-between">
          <p className="font-bold text-base">₹ 6451.60</p>
          <div className='flex gap-2'>
          <FaArrowTrendDown className="inline-block text-[#FF5863] text-xs" />
            <p className="font-medium text-xs text-[#FF5863]">
                
                10.8 (1.65%)</p>
          </div></div>
        </div>
    );
    }

    