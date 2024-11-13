const SearchBar = ({styles})=>{
    const defaultStyle = "shadow-custom1 rounded-lg px-2 flex flex-row items-center";
    const newStyle = `${defaultStyle} ${styles}`
    return(
        <div className={newStyle}>
            <img src="images/web/search.png" className="size-5" alt="" />
            <input className="p-2 text-lg border-0 outline-none w-full" placeholder="search.." type="text" name="search" id="search" />
        </div>
    )
}

export default SearchBar;