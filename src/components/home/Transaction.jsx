const Item = (props)=>{
    return(
        <div 
            className="bg-white  flex flex-row items-center gap-2 p-2 px-4 rounded-lg border-1"
            style={{"box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <div className="bg-white size-11 rounded-lg-xl mr-3 rounded-full p-2"
                style={{"box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                <img className="w-full h-full" src={props.img} alt="" srcset="" />
            </div>
            <div className="flex-1">
                <p className="font-semibold">{props.name}</p>
                <p className="text-sm text-gray-500">{props.des}</p>
            </div>
            <p className="font-bold">
            ₹{props.val}
            </p>
        </div>
    )
}

const Transaction = (props)=>{
    return (
        <div className="mt-6 pb-20">
            <h1 className="text-xl font-semibold mb-1">Today's Transactions</h1>
            <p className="text-sm text-gray-500 font-semibold mb-4">08 sep 2023</p>
            <div className="flex flex-col gap-2">
                <Item img={"images/add/food.png"} name={"Food"} des={"Urben eats"} val={500}/>
                <Item img={"images/add/petrol.png"} name={"petrol"} des={"bharath petrols"} val={120}/>
                <Item img={"images/add/hospital.png"} name={"hospital"} des={"uni hospital"} val={"350"}/>
            </div>
        </div>
    )
}

export default Transaction;