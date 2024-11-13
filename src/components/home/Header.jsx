// pages
import Notification from "../pages/Notification";

const Header = (props)=>{
    return (
        <div className="flex flex-row justify-between items-center mb-8">
            <div className="flex flex-col">
                <p className="text-gray-600">Good Morning!</p>
                <h2 className="font-semibold text-xl">Mohamed shanib</h2>
            </div>

            <Notification name={"Notification"} placement={"end"}/>
        </div>
    )
}

export default Header;