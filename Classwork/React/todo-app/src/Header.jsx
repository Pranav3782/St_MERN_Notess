import PrimaryButton from "./PrimaryButton"

function Header(){
    return (
       <header className="border-b-2 border-red px-4 py-2 flex items-center justify-between">
        <div>
            <img className="rounded-xl object-contain h-[60px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" />
        </div>
        <nav className="flex items-center justify-center">
            <ul className="flex items-center justify-center gap-6">
                <li className="font-medium text-lg text-black hover:text-blue-500 hover:underline hover:cursor-pointer">Home</li>
                <li className="font-medium text-lg text-black hover:text-blue-500 hover:underline hover:cursor-pointer">About</li>
                <li className="font-medium text-lg text-black hover:text-blue-500 hover:underline hover:cursor-pointer">Contact us</li>
            </ul>

        </nav>
        <div className="flex items-center gap-3">
            <PrimaryButton surya={"surya"} buttonText={"Register"}/>
            <PrimaryButton buttonText={"Login"}/>

        </div>
       </header>
    )
}

export default Header;