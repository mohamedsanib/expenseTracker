const Footer = ({styles, onClick})=>{
    return(
        <div className="mt-4">
            <img onClick={onClick} src="images/web/back-button.png" className="size-9 cursor-pointer"  />
        </div>
    )
}

export default Footer;