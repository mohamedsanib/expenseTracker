export const Logo1 = ({className})=>{
    const defaultClassName = "";
    const combinedClassName = `${defaultClassName} ${className}`;
    return(
        <img
            className = {combinedClassName}
            src="/images/web/starter1.png"
            alt="Expense-Logo"
        />
    )
}