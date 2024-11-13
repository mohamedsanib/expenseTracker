export const IncomeCredit = (props)=>{
    return(
        <div 
        className="flex flex-row justify-between items-center p-3 gap-1 rounded-2xl bg-creditbg text-center"
        style={{"box-shadow": "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <img src={props.img} className="size-10" alt="" />
            <div>
                <p className="text-sm  text-credittxt font-bold">₹ {props.val} +</p>
                <p className="text-sm">{props.name}</p>
            </div>
        </div>
    )
};

export const IncomeDebit = (props)=>{
    return(
        <div 
        className="flex flex-row justify-between items-center p-3 gap-1 rounded-2xl bg-debitbg text-center"
        style={{"box-shadow": "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <img src={props.img} className="size-10" alt="" />
            <div>
                <p className="text-sm  text-debittxt font-bold">₹ {props.val} -</p>
                <p className="text-sm">{props.name}</p>
            </div>
        </div>
    )
};

