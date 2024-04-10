export default function Type() {

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <p className="text-base font-medium text-[#EBECEC] ">Order Type</p>

                <div className="flex gap-4">
                    <div className="flex gap-3">
                        <input type="radio" id="market" className="accent-[#01C36D]" name="orderType" defaultChecked />
                        <label htmlFor="market">Market</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="radio" id="limit" className="accent-[#01C36D]" name="orderType" />
                        <label htmlFor="limit">Limit</label>
                    </div>

                </div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <p className="text-base font-medium text-[#EBECEC] ">Action Type</p>

                <div className="flex gap-4">
                    <div className="flex gap-3">
                        <input type="radio" id="buy" className=" accent-[#01C36D]" name="actionType" defaultChecked />
                        <label htmlFor="buy">Buy</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="radio" id="sell" className="accent-[#01C36D]" name="actionType" />
                        <label htmlFor="sell">Sell</label>
                    </div>

                </div>
            </div>




        </div>
    );
}