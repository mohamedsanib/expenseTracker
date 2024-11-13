import { useState } from "react";

const data = [
    {
        "name" : "electronics",
        "img" : "images/add/electric.png",
        "keywords": [
            "phone",
            "mobile",
            "telephone",
            "computer",
            "Laptop"
        ]
    },
    {
        "name" : "food",
        "img" : "images/add/food.png",
        "keywords": [
            "phone",
            "mobile",
            "telephone",
            "computer",
            "Laptop"
        ]
    },
    {
        "name" : "car",
        "img" : "images/add/car.png",
        "keywords": [
            "phone",
            "mobile",
            "telephone",
            "computer",
            "Laptop"
        ]
    },
    {
        "name" : "flight",
        "img" : "images/add/flight.png",
        "keywords": [
            "phone",
            "mobile",
            "telephone",
            "computer",
            "Laptop"
        ]
    }
];

const ListItem = ({styles, onClick, img, name, keywords, index})=>{
    return(
        <div className="w-full p-3 flex flex-row items-center justify-between cursor-pointer gap-4 border-1 mb-2 rounded-lg hover:shadow-md"
         key={index}
         onClick={onClick}>
            <img src={img} className="size-7" alt="" srcset="" />
            <h1 className="text-md font-semibold flex-1">
                {name}
            </h1>

        </div>
    )
}

const List = ({styles})=>{
    const[items, setItems] = useState([
        {
            "name" : "electronics",
            "img" : "images/add/electric.png",
            "keywords": [
                "phone",
                "mobile",
                "telephone",
                "computer",
                "Laptop"
            ]
        },
        {
            "name" : "food",
            "img" : "images/add/food.png",
            "keywords": [
                "phone",
                "mobile",
                "telephone",
                "computer",
                "Laptop"
            ]
        },
        {
            "name" : "car",
            "img" : "images/add/car.png",
            "keywords": [
                "phone",
                "mobile",
                "telephone",
                "computer",
                "Laptop"
            ]
        },
        {
            "name" : "flight",
            "img" : "images/add/flight.png",
            "keywords": [
                "phone",
                "mobile",
                "telephone",
                "computer",
                "Laptop"
            ]
        },
        {
            "name" : "bus",
            "img" : "images/add/bus.png",
            "keywords": [
                "phone",
                "mobile",
                "telephone",
                "computer",
                "Laptop"
            ]
        },
        {
            "name" : "cloths",
            "img" : "images/add/cloths.png",
            "keywords": [
                "phone",
                "mobile",
                "telephone",
                "computer",
                "Laptop"
            ]
        },
        {
            "name" : "debt",
            "img" : "images/add/debt.png",
            "keywords": [
                "phone",
                "mobile",
                "telephone",
                "computer",
                "Laptop"
            ]
        },
        {
            "name" : "gas",
            "img" : "images/add/gas.png",
            "keywords": [
                "phone",
                "mobile",
                "telephone",
                "computer",
                "Laptop"
            ]
        }
    ]);

    return(
        <div className="mt-4 h-64 overflow-y-auto">
            {items.map((item, index)=>{
               return <ListItem
                onClick={()=> console.log({item})} 
                img={item.img} 
                name={item.name} 
                index={index}
                keywords={item.keywords}
                 />
            })}
        </div>
    )
}

export default List;