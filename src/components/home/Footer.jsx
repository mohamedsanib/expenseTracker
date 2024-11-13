// component add
import Add from "../pages/Add";

import { useNavigate } from "react-router-dom"


const Box = ({name, link, styles})=>{
    const path = useNavigate();

    const handlePath = ()=>{
        path(`${link}`);
    }

    const defaultStyle = "cursor-pointer ";
    const newStyle = `${defaultStyle} ${styles}`;
    return(
        <div className={newStyle} onClick={handlePath}>
            <img className="w-full h-full" src={name} alt="" srcset="" />
        </div>
    )
}


const Footer = ()=>{
    return (
        <div className="fixed bottom-0 left-0 right-0 m-auto w-full max-w-lg px-2 pt-2 pb-3 bg-inherit">
            <div className="flex flex-row w-full justify-around items-center p-2 rounded-2xl bg-white"
                style={{"box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            >
                <Box name={"images/web/home.png"} link={"/"} styles={"size-6"}/>
                <Box name={"images/web/card.svg"} link={"/subscription"} styles={"size-6"}/>
                <Add name={"images/web/add.png"}  styles={"size-10"}/>
                <Box name={"images/web/timeline.svg"} link={"/statistics"} styles={"size-6"}/>
                <Box name={"images/web/user.svg"} link={"/profile"} styles={"size-6"}/>
            </div>
        </div>
    )
}

export default Footer;